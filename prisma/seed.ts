import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getUsers() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',

      email: 'jsteinback@abc.pl',
      password: 'abc123',
      role: 'ADMIN',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',

      email: 'tolkien@abc.pl',
      password: 'abc123',
      role: 'USER',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',

      email: 'orwell@abc.pl',
      password: 'abc123',
      role: 'USER',
    },
  ];
}

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      name: 'Trombee',
      categories: 'shoes',
      price: 10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      image: 'lorem',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      name: 'Oreves',
      categories: 'clothes',
      price: 110,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      image: 'lorem',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      name: 'Trombee',
      categories: 'shoes',
      price: 210,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      image: '',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      name: 'Cumenda',
      categories: 'accesories',
      price: 130,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      image: 'lorem',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      name: 'Aseve',
      categories: 'shoes',
      price: 110,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      image: 'lorem',
    },
  ];
}

function getOrders() {
  return [
    {
      id: 'bd105551-0f0d-4a9f-bc41-c559c8a17264',
      userId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      adress: 'Warszawa 23-444, ul.Nowa 14',
    },
    {
      id: 'bd105551-0f0d-4a9f-bc41-c559c8a17222',
      userId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      adress: 'Warszawa 23-444, ul.Nowa 22',
    },
  ];
}

async function seed() {
  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({ data: user });
    }),
  );

  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getOrders().map((order) => {
      return db.order.create({
        data: {
        
          product: {
            connect: { id: order.productId },
          },
          user: {
            connect: { id: order.userId },
          },
        },
      });
    }),
  );
}

seed();
