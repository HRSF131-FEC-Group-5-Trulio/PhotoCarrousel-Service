const faker = require('faker');

const model = require('../db/models/carousels.js');

const s3Links = require("./s3Links.js");

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
    photos: s3Links[index % s3Links.length], // {large: [strings], small: [strings]}
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