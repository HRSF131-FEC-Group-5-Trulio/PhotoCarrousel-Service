import React from 'react';
import $ from 'jquery'; // for ajax
import styled from 'styled-components';

const PhotosBoxParent = styled.div`
display: flex;
justify-content: center;
`;

const ColPhotosBox = styled.div`
display: flex;
flex-direction: column;
`;

const ModalCarouselStyle = styled.div`
position: absolute;
top: 50px;
z-index: 5;
height: 900px;
width: 1560px;
background-color: red;
`;

const ModalCarouselContainer = styled.div`
box-sizing: border-box;
position: relative;
display: flex;
-webkit-box-pack: center;
justify-content: center;
height: 500px;
overflow: hidden;
max-height: calc(100vh - 275px);
min-height: 275px;
`;

const ModalDiv = styled.div`
  z-index: 10;
  height: 900px;
  width: 1560px;
  background-color: red;
  position: absolute;
  top: 50px;
  overflow-y: auto;
`;

const TrippleRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const DoubleRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const SingleRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const TrippleRowPhoto = styled.img`
  width: 730px;
  height: 490px;
`;

const DoubleRowPhoto = styled.img`
  width: 485px;
  height: 370px;
`;

const SingleRowPhoto = styled.img`
  width: 1470px;
  height: 690px;
`;

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

const ModalCarousel = (props) => {
  // organize photos for jsx
  let trippleRowsPhotos = [];
  // let doubleRowsPhotos = [];
  // let singleRowPhotos = [];
  // make as many tripple rows as the small pics allow for
  let numTrippleRows = Math.floor(props.photos.small.length / 3);
  for (let i = 0; i < numTrippleRows; i++) {
    trippleRowsPhotos.push(props.photos.small.slice(i * 3, (i * 3 + 3)));
  }
  console.log(trippleRowsPhotos);
  // // sort the big pics 50-50 between double and tripple rows
  // // let numSingleRows = Math.ceil(props.photos.large.length / 2);
  // let numDoubleRows = Math.floor(props.photos.large.length / 2);
  // for (let i = 0; i < numDoubleRows; i+=2) {
  //   doubleRowsPhotos.push(props.photos.large.slice(i, i + 2));
  // }

  // assemble the component
  return (
    // <h1>Hello from MODAL!</h1>
    <ModalDiv>
      <ColPhotosBox>
      {
        // all rows concat --> randomize rows order ---> map over rows, get components
        shuffle(trippleRowsPhotos.concat(doubleRowsPhotos, singleRowPhotos)).map(row => {
          if (row.length === 3) {
            return <TrippleRow row={row}/>
          }
          if (row.length === 2) {
            return <DoubleRow row={row}/>
          }
          if (row.length === 1) {
            return <SingleRow row={row}/>
          }
        })
      }
      </ColPhotosBox>
    </ModalDiv>
  );
};

export default ModalCarousel;
