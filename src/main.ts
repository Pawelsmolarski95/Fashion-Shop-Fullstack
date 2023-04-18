
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import * as cookieParser from 'cookie-parser'
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  app.use('/', express.static(join(process.cwd(), 'client', 'build'))); 
  app.use('/public', express.static(join(process.cwd(), 'public')));
 
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
