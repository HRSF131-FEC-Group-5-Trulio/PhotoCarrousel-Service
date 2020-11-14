const mongoose = require('mongoose');
const faker = require('faker');
const Photos = require('../db/models/photos.js');
const fs = require('fs');
const Path = require('path');
mongoose.connect('mongodb://localhost/photos');

/**
 * Add 100 png images to the Photos database
 */
var seed = function() {
  //  For every listing_id from 1 to 100:
  //    Pick a folder from data/sample_data:
  //      db.save <--- photo {listing_id, url*, description}
  //      *the url can be a local filepath. later on, use S3 urls.
  const samplesPath = "./data/sample_images";
  const images = fs.readdirSync(samplesPath).map(dir =>
    fs.readdirSync(Path.join(samplesPath, dir)).map(image => Path.join(samplesPath, dir, image))
  );
  for (let listing_id = 1; listing_id <= 100; listing_id++) {
    const imagePaths = images[listing_id % images.length];
    imagePaths.forEach(path => {
      Photos.insertOne({
        listing_id: listing_id,
        url: path,
        description: faker.lorem.sentence(),
      });
    });
  }
}

seed();
