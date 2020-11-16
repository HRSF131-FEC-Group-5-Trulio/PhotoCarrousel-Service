const mongoose = require("mongoose");
const faker = require("faker");
const fs = require("fs");
const path = require("path");

const Carousel = require("../db/models/carousels.js"); // _bugsuspect: use db/models/carousels.js
const s3_links = require("../data/S3_Links.js");

mongoose.connect("mongodb://localhost/carousels");
const db = mongoose.connection;

// create 100 carousels
var seed = function() {
  for (var i = 1; i <= 100; i++) {
    let address = Object.keys(s3_links)[i % Object.keys(s3_links).length];
    Carousel.insertOne({
      listing_id: i,
      region: "CA", // e.g., "CA"
      city: faker.fake('{{address.city}}'),
      zipCode: faker.fake('{{address.zipCode}}'),
      address: address,
      price: 6000000,
      beds: 5,
      baths: 5,
      photos: s3_links[address],
      saved: false,
      newConstruction: false,
      quickMoveIn: false,
    });
  }
};

seed();
