/**
 * GET /api/homes/:id/photos ---> [{"url":<S3 Link>}]
 * GET /api/user_favorites --->
 */

const express = require("express");
const app = express();
const port = 3030;

const Carousels = require("../db/models/carousels.js");

app.get("/api/homes/:id/photos", (req, res) => {
  // res.json(req.params);
  console.log(`GET /api/homes/${req.params.id}/photos`)
  Carousels
    .findOne(req.params.id,
      (err, listing_doc) => {
        if (err) {
          console.log(`Error: failed to find document with listing_id = ${req.params.id}`);
          res.sendStatus(404);
        } else {
          console.log("Successful response...");
          res.json(
            listing_doc.photos.map(s3_url => ({url: s3_url}))
          )
        }
      })
    // .photos
    // .map(s3_url => ({url: s3_url}))
});

app.get("/api/:id/is_favorite", (req, res) => {
  console.log(`/api/${req.params.id}/is_favorite`);
  Carousels
    .findOne(req.params.id,
      (err, listing_doc) => {
      if (err) {
        console.log(`Error: failed to find document with listing_id = ${req.params.id}`);
        res.sendStatus(404);
      } else {
        console.log("Successful response...");
        res.json(
          listing_doc.saved
        )
      }
    })
});

app.post("/api/:id/change_favoredness", (req, res) => {
  console.log(`/api/${req.params.id}/change_favoredness`);
});

app.listen(port, (error) => {
  if (error) {
    console.log("Error: PhotoCarrousel-Service express server did not listen");
  } else {
    console.log("PhotoCarrousel-Service express server listening on " + port);
  }
});

