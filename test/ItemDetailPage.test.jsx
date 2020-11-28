import React from 'react';
import ReactDOM from 'react-dom';

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"

import ItemDetailPage from "../client/src/components/ItemDetailPage.jsx";

// prevent tests from being "leaky"
// @ https://reactjs.org/docs/testing-recipes.html
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  // cleanup on exitign
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

const sampleListing = {
  "_id": "5fbdd9031d244855a9daf95f",
  "listing_id": 1,
  "region": "CA",
  "city": "East Melisa",
  "zipCode": "42065-7299",
  "address": "2173 Gulgowski Mission",
  "price": 913801,
  "beds": 0,
  "baths": 8,
  "photos": {
      "large": [
          "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./large/img_0.webp",
          "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./large/img_1.webp",
          "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./large/img_10.webp"
      ],
      "small": [
          "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./small/img_0.webp",
          "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./small/img_1.webp",
          "https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/Trulia_Pics/58+Shady+Ln./small/img_11.webp"
      ]
  },
  "newConstruction": true,
  "quickMoveIn": false,
  "__v": 0
}

describe("ItemDetailPageView", () => {
  it("renders photos", () => {
    act(() => {
      render(<ItemDetailPage photos={sampleListing.photos}/>, container);
    });
    expect(container)
  });
});

