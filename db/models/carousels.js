const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carousels');

const carouselSchema = mongoose.Schema({
  listing_id: Number,
  region: String, // e.g., "CA"
  city: String,
  zipCode: String,
  address: String,
  price: Number,
  beds: Number,
  baths: Number,
  photos: Array, // s3 urls
  saved: Boolean,
  newConstruction: Boolean,
  quickMoveIn: Boolean,
});

var CarouselModel = mongoose.model('Carousel', carouselSchema);

// findAll retrieves all carousel
function findAll(callback) {
  CarouselModel.find({}).exec(callback);
}

// findOne will retrieve the carousel associated with the given id
function findOne(id, callback) {
  CarouselModel.findOne({"listing_id": id}, callback);
}

// insertOne inserts a carousel into the db
function insertOne(carousel, callback) {
  CarouselModel.create(carousel, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
