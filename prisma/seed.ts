import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();


function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Perfect Super Soft Crew Neck Tee ',
      price: 200,
      description:
        'The Perfect Super Soft Crew Neck Tee is a type of T-shirt that is designed to be incredibly comfortable and versatile It is typically made from a soft lightweight fabric such as cotton or a cotton blend  which feels gentle against the skin and allows for ease of movement The crew neck style is a classic and timeless design that features a rounded neckline that sits close to the base of the neck. This neckline is flattering on most body types and provides a clean, simple look that can be dressed up or down The Perfect Super Soft Crew Neck Tee is often designed with a relaxed fit, allowing for a comfortable, casual look that is perfect for everyday wear. It is also available in a wide range of colors and sizes, making it a versatile addition to any wardrobe.Whether worn on its own or layered under a sweater or jacket the Perfect Super Soft Crew Neck Tee is a staple piece that can be worn year-round and is suitable for a variety of occasions from running errands to going out with friends',
      material: 'cotton',
      color: 'red',
      category: 'women',
      rating: 4,
      size: 'S',
      
    },

    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      name: 'Courrèges high-neck zip-up jacket',
      price: 500,
      description:
        'A jacket is a type of garment that is worn over other clothing to provide warmth or protection from the elements. It typically has sleeves, a front opening, and may or may not have a hood. Jackets come in many different styles and materials, such as leather, denim, wool, and synthetic fabrics. Some jackets are designed for specific activities, such as skiing or hiking, and may have features like waterproofing or ventilation.Jackets can also be used for fashion purposes, with various designs and colors available to suit personal style. They can be worn with a variety of clothing, such as jeans, skirts, and dresses, and can be dressed up or down depending on the occasion.',
      category: 'women',
      color: 'green',
      material: 'wool',
      rating: 4,
      size: 'XL',
     
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'AMI Paris logo-print shirt jacket',
      price: 300,
      description:
        'A mens jacket is a type of outerwear that is designed to provide warmth and protection from the elements. Mens jackets come in many different styles, materials, and designs to suit a range of needs and preferences.Some common materials used in mens jackets include leather, denim, wool, and synthetic fabrics. Jackets can also be lined with insulation, such as down or synthetic materials, to provide extra warmth. Mens jackets may feature a variety of functional features, such as pockets, zippers, and hoods, as well as decorative elements like embroidery, patches, or patterns.There are many different styles of mens jackets available, including bomber jackets, denim jackets, leather jackets, parkas, and pea coats, among others. Each style has its own unique features and can be worn for different occasions, from casual outings to formal events.',
      category: 'men',
      material: 'leather',
      color: 'purple',
      size: 'M',
      rating: 5,
      
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      name: 'OUR Legacy striped box shirt',
      price: 250,
      description:
        'A mens shirt is a type of garment that is worn on the upper body, typically made of cotton or other lightweight materials. Mens shirts come in a variety of styles, including dress shirts, casual shirts, and sport shirts.Dress shirts are typically made of a finer, more formal fabric and are worn with a suit or dress pants for formal occasions such as weddings or business meetings. They usually have a pointed collar and can be buttoned up all the way to the neck, with a placket on the front that covers the buttons.Casual shirts are more relaxed and can be made of a variety of materials such as cotton, linen, or denim. They may have a more relaxed fit and can be worn untucked with jeans or shorts for a more casual look. These shirts come in a variety of styles such as t-shirts, polo shirts, and button-up shirts with different collar styles.Sport shirts are designed for athletic activities, such as golf or tennis, and are made of lightweight, breathable materials. They often have short sleeves and may have a collar or a button-up design.',
      category: 'men',
      material: 'denim',
      color: 'beige',
      size: 'L',
      rating: 5,
      // image: ['men_5.jpeg', 'men_6.webp', 'men_7.jpeg', 'men_8.jpeg'],
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      name: 'Versace Barocco 660 silk tie',
      price: 500,
      description:
        'A tie is a narrow strip of cloth, usually made of silk or polyester, that is worn around the neck and tied in a knot under the collar of a dress shirt. Ties are typically worn by men as part of formal or professional attire, but can also be worn by women as a fashion accessory.Ties come in a variety of styles, colors, and patterns. Some common styles include the classic necktie, the bow tie, and the ascot. Classic neckties are the most common type of tie and are usually made of silk or polyester. They are long and narrow, with a pointed tip, and are tied in a variety of knots, such as the Windsor, the half-Windsor, and the four-in-hand.Bow ties are typically worn for formal occasions and have a more unique, symmetrical shape. They are also available in a range of colors and patterns and can be worn with a variety of shirt styles, from tuxedos to dress shirts.',
      category: 'accessories',
      material: 'polyester',
      color: 'white',
      size: 'L',
      rating: 2,
      // image: [
      //   'accesories_1.jpeg',
      //   'accesories_2.jpeg',
      //   'accesories_3.jpeg',
      //   'accesories_4.jpeg',
      // ],
    },
  ];
}
function getImages() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      fileName: 'women_1.jpeg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17211',
      fileName: 'women_2.jpeg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      fileName: 'women_3.jpeg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
      fileName: 'women_4.jpeg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17266',
      fileName: 'women_5.jpeg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17233',
      fileName: 'women_6.jpeg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      fileName: 'women_7.jpeg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17999',
      fileName: 'women_8.jpeg',
      productId: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17002',
      fileName: 'men_1.jpeg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17554',
      fileName: 'men_2.jpeg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
      fileName: 'men_3.jpeg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17268',
      fileName: 'men_4.webp',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17269',
      fileName: 'men_5.jpeg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17270',
      fileName: 'men_6.webp',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17271',
      fileName: 'men_7.jpeg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17272',
      fileName: 'men_8.jpeg',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17273',
      fileName: 'accesories_1.jpeg',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17274',
      fileName: 'accesories_2.jpeg',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17275',
      fileName: 'accesories_3.jpeg',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17276',
      fileName: 'accesories_4.jpeg',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
    },
  ];
}


async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
  await Promise.all(
    getImages().map(({ productId, ...imageData }) => {
      return db.image.create({
        data: {
          ...imageData,
          product: {
            connect: { id: productId },
          },
        },
      });
    }),
  );
}

seed();
