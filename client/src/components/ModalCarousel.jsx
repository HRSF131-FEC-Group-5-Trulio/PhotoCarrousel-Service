import React from 'react';
import $ from 'jquery'; // for ajax
import styled from 'styled-components';

const ModalDiv = styled.div`
  z-index: 10;
  height: 90%;
  width: 90%;
  background-color: grey;
  position: absolute;
  top: 50px;
`;

const ColPhotosBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 85%;
  overflow-y: auto;
`;

const TrippleRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const SmallPhoto = styled.img`
  width: 330px;
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
    <ModalDiv>
      <ColPhotosBox>
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
      </ColPhotosBox>
    </ModalDiv>
  );
};


// const ModalCarousel = (props) => {
//   console.log('props.photos = ', props.photos);
//   let rows = getRows(props.photos);
//   console.log(rows);

//   return (
//     <ModalDiv>
//       <ColPhotosBox>
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
//       </ColPhotosBox>
//     </ModalDiv>
//   );
// };

export default ModalCarousel;
