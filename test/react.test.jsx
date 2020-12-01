// import libraries
import React from "react";
import ReactDOM from "react-dom";
import {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// import local files
import App from "../client/src/Components/App.jsx";
import ItemDetailPage from "../client/src/Components/ItemDetailPage";
import ModalCarousel from "../client/src/Components/ModalCarousel";

// prevent tests from being "leaky"
// @ https://reactjs.org/docs/testing-recipes.html
import { unmountComponentAtNode } from "react-dom";
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


// dummy data
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

test("Shallow renders App component", () => {
  const wrapper = shallow(<div><App /></div>);
  expect(wrapper.find(App)).toHaveLength(1);
});

test("Given a Number \"id\" as a prop, it shallow renders App component", () => {
  const wrapper = shallow(<div><App id={22}/></div>);
  expect(wrapper.find(App)).toHaveLength(1);
});

test("Given an Object \"photos\" as a prop, it shallow renders ItemDetailPage component", () => {
  const wrapper = shallow(<div><ItemDetailPage photos={sampleListing.photos}/></div>);
  expect(wrapper.find(ItemDetailPage)).toHaveLength(1);
});

test("Given an Object \"listings\" as a prop, it shallow renders ModalCarousel component", () => {
  const wrapper = shallow(<div><ModalCarousel listing={sampleListing}/></div>);
  expect(wrapper.find(ModalCarousel)).toHaveLength(1);
});
``

