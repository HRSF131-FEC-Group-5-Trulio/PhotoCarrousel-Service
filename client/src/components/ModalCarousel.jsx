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
  flex-direction: row;
  color: rgb(59, 65, 68);
  // height: calc(100% - 96px);
  height: 6%;
  width: 100%;
`;

const NavBarTabs = styled.div`
  color: rgb(59, 65, 68);
  display: flex;
  flex-direction: row;
`;

const NavBarSocial = styled(NavBarTabs)`
  margin-left: auto;
`;

const NavBarIcon = styled.div`
  // float: left;
  padding: 3px;
  align-items: left;
  margin-right: 8px;
`;

const LikeIcon = styled(NavBarIcon)`
  height: 20px;
  width: 20px;
`;

const ShareIcon = styled(NavBarIcon)`
  height: 30px;
  width: 30px;
  margin-top: -5px;
  // line-height: -100px;
`;

const CloseIcon = styled(NavBarIcon)`
  height: 25px;
  width: 25px;
`;

const NavBarTabItem = styled.div`
  // transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
`;

const NavBarButton = styled.button`
  height: 80%;
  background-color: transparent;
  color: rgb(59, 65, 68);
  font-weight: 575;
  border-width: 1px;
  border-style: none;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  white-space: nowrap; // what's this?
  font-size: 16px;
  // line-height: 1.5; // this made text noncentered in buttons
  padding: 8px 16px;
  outline: none;
  border-radius: 8px;
  // display: inline-block;
  // display: flex;
  // flex-direction: row;
`;

const NavBarButtonText = styled.div`
  line-height: 30px;
`;

const NavBarButtonSocial = styled(NavBarButton)`
  border-style: solid;
  border-color: rgba(59, 65, 68, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  // margin-right: 5px;
  margin-left: 10px;
`;

const NavBarButtonActive = styled(NavBarButton)`
  color: rgb(0, 120, 130);
  border-style: solid;
  border-color: rgba(59, 65, 68, 0.2);
  box-shadow: rgba(59, 65, 68, 0.4) 0px 8px 20px -15px;
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
  margin: 0px 8px;
  // border: solid;
  overflow-y: auto;
`;

const GalleryContent = styled.div`
  // display: flex;
  // flex-direction: column;
  overflow-y: auto;
  border: solid;
  // position: absolute;
  border-radius: 25px;
  height: calc(100% - 81px);
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
  // height: 100%
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
          <NavBarTabs>
            <NavBarTabItem><NavBarButtonActive>Photos</NavBarButtonActive></NavBarTabItem>
            <NavBarTabItem><NavBarButton>Map</NavBarButton></NavBarTabItem>
            <NavBarTabItem><NavBarButton>Street View</NavBarButton></NavBarTabItem>
            <NavBarTabItem><NavBarButton>Schools</NavBarButton></NavBarTabItem>
            <NavBarTabItem><NavBarButton>Crime</NavBarButton></NavBarTabItem>
            <NavBarTabItem><NavBarButton>Commute</NavBarButton></NavBarTabItem>
            <NavBarTabItem><NavBarButton>Shop & Eat</NavBarButton></NavBarTabItem>
          </NavBarTabs>
          <NavBarSocial>
            <NavBarTabItem>
              <NavBarButtonSocial>
                <LikeIcon>
                  <img src="./icons/like.svg"></img>
                </LikeIcon>
                <NavBarButtonText>
                  Save
                </NavBarButtonText>
              </NavBarButtonSocial>
            </NavBarTabItem>
            <NavBarTabItem>
              <NavBarButtonSocial>
                <ShareIcon>
                  <img src="./icons/share.svg"></img>
                </ShareIcon>
                <NavBarButtonText>
                  Share
                </NavBarButtonText>
              </NavBarButtonSocial>
            </NavBarTabItem>
            <NavBarTabItem>
              <NavBarButton onClick={props.closeModal}>
                <CloseIcon>
                  <img src="./icons/close.svg"></img>
                </CloseIcon>
              </NavBarButton>
            </NavBarTabItem>
          </NavBarSocial>
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

