import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();



function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Shoes ',
      price: 2000,
      description: 'Cheap, ideal for beginners',
      category: "Digital Products"
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      name: 'Shoes',
      price: 5000,
      description: 'Professional camera, solid build',
      category: "Digital Products"
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'accesories',
      price: 3000,
      description: 'Professional camera, we technology',
      category: "Digital Products"
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      name: 'Nikon D50',
      price: 2000,
      description: 'Cheap, ideal for beginners',
      category: "Digital Products"
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      name: 'Italiano',
      price: 5000,
      description: 'Small, compact, innovative',
      category: "shoes"
    },
  ];
}



async function seed() {

  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  }

seed();
