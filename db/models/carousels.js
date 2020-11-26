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
  photos: Object, // {large: [strings], small: [strings]}
  saved: Boolean, // should be in user schema
  newConstruction: Boolean,
  quickMoveIn: Boolean,
});

var CarouselModel = mongoose.model('Carousel', carouselSchema);

// findAll retrieves all carousel
function findAll(callback) {
  CarouselModel.find({}).exec(callback);
}

// _findOneById will retrieve the carousel associated with the given id
function _findOneById(id, callback) {
  CarouselModel.findOne({"listing_id": id}, callback);
}

// insertOne inserts a carousel into the db
function insertOne(carousel, callback) {
  CarouselModel.create(carousel, callback);
}

function changeFavoredness(id, callback) {
  CarouselModel.findOne({listing_id: id}, (err, doc) => {
    if (err) {
      callback(err);
    }
    let toggled = !doc.saved;
    console.log(`toggled = ${toggled}`);
    console.log(`typeof toggled = ${typeof toggled}`);
    // console.log(`doc = ${doc}`);
    CarouselModel.updateOne(
      {listing_id: 22}, // <-- id
      {$set: {saved: toggled}},
      // {overwrite: true},
      callback
      // (err, data) => {
      //   if (err) {
      //     callback(err);
      //   } else {
      //     callback(null, data);
      //   }
      // }
    );
  });
}

exports._findOneById = _findOneById;
exports.changeFavoredness = changeFavoredness;
exports.findAll = findAll;
exports.insertOne = insertOne;


  // listing <--- get the listing with listing_id === id
  // reverse listing.saved
  // _findOneById(id, (err, doc) => {
  //   if (err) {
  //     callback(err);
  //   } else {
  //     console.log("doc.saved = ", doc.saved);
  //     let toggled = !doc.saved;
  //     console.log("toggled = ", toggled);
  //     CarouselModel.updateOne(
  //       {"listing_id": id},
  //       {$set: {"saved": toggled}}, // $set
  //       callback(null, toggled)
  //     )
  //   }
  // })
