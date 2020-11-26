import React from 'react';
import $ from 'jquery'; // for ajax
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6); // shadowy transparency
  overflow-y: auto;
`;

const Modal = styled.div`
  background-color: rgb(255, 255, 255); // white
  color: rgb(59, 65, 68); // dark
  width: calc(100% - 96px);
  // margin: 48px; // bad effect only?
  border-radius: 8px; // space between pics
  // transform: translate3d(0px, 0px, 0px); // _NoEffect?
`;

// _ToDo:
// NavBar for the "Photos... Save" bar at top of modal
// LocalInfoBox holds the price/address/bedsbaths text, photos scroll, and schedule tour
const NavBar = styled.div`
  padding: 8px 8px 0px;
  border-bottom: 1px solid rgb(233, 233, 234);
`;

// ---> Layout GalleryHeader, GridGallery, ScheduleTour
const LocalInfoBox = styled.div`
  flex: 1 1 0%;
  position: relative;
  flex-direction: column;
  overflow: visible;
  // overflow-y: auto;
`;

// --> $address | $price | $beds $baths
const GalleryHeader = styled.div`

`;

const GridGallery = styled.div`
  // display: flex;
  // flex-direction: column;
  width: calc(100% - 358px);
  height: 100%;
  // overflow-y: auto;
  position: relative;
  border-radius: 8px;
  margin: 0px 8pxl
  // overflow-y: auto;
`;

const TrippleRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const SmallPhoto = styled.img`
  // width: 330px;
  width: calc(33% - 2.5px);
  height: 230px;
  padding: 5px;
`;

const SingleRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%
  height: 100%
`;

const LargePhoto = styled.img`
  width: 988px;
  height: 560px;
  padding: 5px;
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

/**
 * @param {Object} photos, {small: [strings], large: [strings]}
 * @returns {Object} rows, {trippleRows: [[strings]], singleRows: [strings]}
 */
const getRows = (photos) => {
  let rows = {};
  rows.tripplets = [];
  rows.singlets = photos.large; // _ToDo: split photos.large into doublets + singlets
  let numTripplets = Math.floor(photos.small.length / 3);
  for (let i = 0; i < numTripplets; i++) {
    rows.tripplets.push(photos.small.slice(i * 3, (i * 3 + 3)));
  }
  return rows;
}

const ModalCarousel = (props) => {
  console.log('props.photos = ', props.photos);
  let rows = getRows(props.photos);
  console.log(rows);

  return (
    // <ModalContainer>
    //   <h1>From ModalContainer</h1>
    //   <Modal>
    //     <h1>From Modal</h1>
    //     <NavBar>
    //       <h1>From NavBar</h1>
    //     </NavBar>
    //   </Modal>
    // </ModalContainer>
    <ModalContainer>
      <Modal>
        <NavBar>
          <h2>From NavBar</h2>
        </NavBar>
        <LocalInfoBox>
          <GridGallery>
          { // Images...
            // all rows concat --> randomize rows order ---> map over rows, get components
            shuffle(rows.tripplets.concat(/*doubleRowsPhotos,*/rows.singlets)).map(row => {
              if (row.length === 3) {
                return (
                  <TrippleRow>
                    <SmallPhoto src={row[0]}></SmallPhoto>
                    <SmallPhoto src={row[1]}></SmallPhoto>
                    <SmallPhoto src={row[2]}></SmallPhoto>
                  </TrippleRow>
                )
              } else {
                return (
                  <SingleRow>
                    <LargePhoto src={row}></LargePhoto>
                  </SingleRow>
                )
              }
            })
          }
          </GridGallery>
        </LocalInfoBox>
      </Modal>
    </ModalContainer>
  );
};


// const ModalCarousel = (props) => {
//   console.log('props.photos = ', props.photos);
//   let rows = getRows(props.photos);
//   console.log(rows);

//   return (
//     <ModalContainer>
//       <GridGallery>
//       {
//         // all rows concat --> randomize rows order ---> map over rows, get components
//         shuffle(rows.tripplets.concat(/*doubleRowsPhotos,*/rows.singlets)).map(row => {
//           if (row.length === 3) {
//             return (
//               <TrippleRow>
//                 <TrippleRowPhoto src={row[0]}></TrippleRowPhoto>
//                 <TrippleRowPhoto src={row[1]}></TrippleRowPhoto>
//                 <TrippleRowPhoto src={row[2]}></TrippleRowPhoto>
//               </TrippleRow>
//             )
//           }
//           // if (row.length === 2) {
//           //   return <DoubleRow row={row}/>
//           // }
//           if (row.length === 1) {
//             return (
//               <SingleRow>
//                 <SingleRowPhoto src={row}></SingleRowPhoto>
//               </SingleRow>
//             )
//           }
//         })
//       }
//       </GridGallery>
//     </ModalContainer>
//   );
// };

export default ModalCarousel;
