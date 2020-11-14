const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photos');

const photosSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  listing_id: Number,
  url: String,  // link to the resource on S3
  description: String,
});

var PhotosModel = mongoose.model('Photos', photosSchema);

// findAll retrieves all photos
function findAll(callback) {
  PhotosModel.find({}).exec(callback);
}

// findOne will retrieve the photo associated with the given id
function findOne(id, callback) {
  PhotosModel.find({id: id}, callback);
}

function findByListing(listing_id, callback) {
  PhotosModel.find({listing_id: listing_id}).exec(callback);
}

// insertOne inserts a photo into the db
function insertOne(photo, callback) {
  PhotosModel.create(photo, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.findByListing = findByListing;
exports.insertOne = insertOne;
