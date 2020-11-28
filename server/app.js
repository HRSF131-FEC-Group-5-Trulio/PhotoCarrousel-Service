// npm packages
const express = require("express");
const app = express();
const path = require("path");
// local files
const Carousels = require("../db/models/carousels.js");
const fs = require("fs");

// constants
const port = 3001;
const public_clientDir = path.join(__dirname, "../client");
const public_staticDir = path.join(public_clientDir, "/dist");

app.use(/*"/:id",*/express.static(public_staticDir)); // for proxy
app.use("/:id", express.static(public_staticDir));

app.get("/api/PhotoCarousel/:id/photos", (req, res) => {
  // res.json(req.params);
  console.log(`GET /api/PhotoCarousel/${req.params.id}/photos`);
  Carousels
    ._findOneById(req.params.id,
      (err, listing_doc) => {
        if (err) {
          console.log(`Error: failed to find document with listing_id = ${req.params.id}`);
          res.sendStatus(404);
        } else {
          console.log("Successful response...");
          res.json(
            listing_doc.photos/*.map(s3_url => ({url: s3_url}))*/
          );
        }
      })
});

app.get("/api/PhotoCarousel/:id/everything", (req, res) => {
  console.log(`/api/PhotoCarousel/${req.params.id}/everything`);
  Carousels
  ._findOneById(req.params.id,
    (err, listing_doc) => {
    if (err) {
      console.log(`Error: failed to find document with listing_id = ${req.params.id}`);
      res.sendStatus(404);
    } else {
      console.log("Successful response...");
      res.json(listing_doc);
    }
  })
});

app.get("/api/PhotoCarousel/:id/is_favorite", (req, res) => {
  console.log(`/api/PhotoCarousel/${req.params.id}/is_favorite`);
  Carousels
    ._findOneById(req.params.id,
      (err, listing_doc) => {
      if (err) {
        console.log(`Error: failed to find document with listing_id = ${req.params.id}`);
        res.sendStatus(404);
      } else {
        console.log("Successful response...");
        res.json(listing_doc.saved);
      }
    })
});

app.post("/api/PhotoCarousel/:id/change_favoredness", (req, res) => {
  console.log(`/api/PhotoCarousel/${req.params.id}/change_favoredness`);
  Carousels
    .changeFavoredness(req.params.id, (err, toggled) => {
      if (err) {
        console.log(`Error: failed to change favoredness. listing_id = ${req.params.id}`);
        res.sendStatus(404);
      } else {
        console.log("Successful response...");
        console.log(toggled);
        res.json(toggled);

      }
    })
});

app.listen(port, (error) => {
  if (error) {
    console.log("Error: PhotoCarrousel-Service express server did not listen");
  } else {
    console.log("PhotoCarrousel-Service express server listening on " + port);
  }
});
