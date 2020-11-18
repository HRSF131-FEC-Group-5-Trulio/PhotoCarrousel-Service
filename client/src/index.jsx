// npm packages
import React from 'react';
import ReactDOM from 'react-dom';

// local components
import PhotosCarousel from './components/PhotosCarousel.jsx';

// aquire the listing_id from the url
console.log(`window.location.pathname = ${window.location.pathname}`);

console.log(`typeof Number(window.location.pathname.slice(1, -1)) = ${typeof Number(window.location.pathname.slice(1, -1))}`);

let id = Number(window.location.pathname.slice(1, -1)); // _TODO: regex!

ReactDOM.render(
  <PhotosCarousel id={id}/>,
  document.getElementById("app")
);
