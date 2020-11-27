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
  height: 90%;
  overflow-y: hidden;
`;

// _ToDo:
// NavBar for the "Photos... Save" bar at top of modal
// LocalInfoBox holds the price/address/bedsbaths text, photos scroll, and schedule tour
const NavBar = styled.div`
  padding: 8px 8px 0px;
  border-bottom: 1px solid rgb(233, 233, 234);
  display: flex;
`;

// ---> Layout GalleryHeader, GridGallery, ScheduleTour
const LocalInfoBox = styled.div`
  flex: 1 1 0%;
  position: relative;
  flex-direction: row;
  height: 93%;
`;

const ScheduleTour = styled.div`
  width: 21%;
  background-color: blue;
`;

// --> $address | $price | $beds $baths
const GalleryHeader = styled.div`
  color: red;
  background-color: blue;
`;

const GridGallery = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 358px);
  height: 100%;
  position: relative;
  border-radius: 8px;
  margin: 0px 8pxl;
  // border: solid;
  overflow-y: auto;
`;

const GalleryContent = styled.div`
  // display: flex;
  // flex-direction: column;
  overflow-y: auto;
  border: solid;
  // position: absolute;
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
  width: 100%;
  // height: 560px;
  padding: 5px;
`;

const ModalCarousel = (props) => {
  let rows = getRows(props.listing.photos);
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
          <GalleryHeader>
            <h2>From GalleryHeader</h2>
          </GalleryHeader>
          <GridGallery>
            <GalleryContent>
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
            </GalleryContent>
          </GridGallery>
          <ScheduleTour>
            <h1>From ScheduleTour</h1>
          </ScheduleTour>
        </LocalInfoBox>
      </Modal>
    </ModalContainer>
  );
};

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

export default ModalCarousel;

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

