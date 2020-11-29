const faker = require('faker');

const model = require('../db/models/carousels.js');

const s3Links = [
  {
    "large": [
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/122+Tiburon+Blvd/large/img_0.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/122+Tiburon+Blvd/large/img_1.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/122+Tiburon+Blvd/large/img_10.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/122+Tiburon+Blvd/large/img_0.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/122+Tiburon+Blvd/large/img_1.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/122+Tiburon+Blvd/large/img_10.webp",
    ],
    "small": [
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/122+Tiburon+Blvd/small/img_0.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/122+Tiburon+Blvd/small/img_1.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/122+Tiburon+Blvd/small/img_2.webp",
    ]
  },
  {
    "large": [
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./large/img_0.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./large/img_1.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./large/img_10.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./large/img_0.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./large/img_1.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./large/img_10.webp"
    ],
    "small": [
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./small/img_0.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./small/img_1.webp",
      "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./small/img_11.webp",
    ],
  }
];

const createRecord = (index) => {

  const carousel = {
    listing_id: index,
    region: faker.address.stateAbbr(), // e.g., "CA"
    city: faker.address.city(),
    zipCode: faker.address.zipCode(),
    address: faker.address.streetAddress(),
    price: Math.floor(Math.random() * 2000000) + 1000,
    beds: Math.floor(Math.random() * 9),
    baths: Math.floor(Math.random() * 9),
    photos: s3Links[index % 2], // {large: [strings], small: [strings]}
    newConstruction: faker.random.boolean(),
    quickMoveIn: faker.random.boolean(),
  };
  return carousel;
}

const seedDB = (records) => {
  for (let i = 1; i <= records; i++) {
    const home = createRecord(i);
    model.insertOne(home, (err) => { if (!err) console.log('inserted') })
  }
}

seedDB(100)