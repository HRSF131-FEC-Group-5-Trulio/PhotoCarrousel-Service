import React from 'react';
import $ from 'jquery'; // for ajax
import styled from 'styled-components';
import { ModalCarouselStyle, PhotosBoxParent, ColPhotosBox, ModalCarouselContainer } from './styledComponents.jsx'

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


const ModalCarousel = (props) => {
  return (
    // <h1>Hello from MODAL!</h1>
    <ModalDiv>
      <ColPhotosBox>
      {
        props.organizedPhotos.map(row => {
          let res = null;
          if (row.length === 3) {
            res = (
              <TrippleRow>
                <TrippleRowPhoto src={row[0].url}></TrippleRowPhoto>
                <TrippleRowPhoto src={row[1].url}></TrippleRowPhoto>
                <TrippleRowPhoto src={row[2].url}></TrippleRowPhoto>
              </TrippleRow>
            )
          } else if (row.length === 2) {
            res = (
              <DoubleRow>
                <DoubleRowPhoto src={row[0].url}></DoubleRowPhoto>
                <DoubleRowPhoto src={row[1].url}></DoubleRowPhoto>
              </DoubleRow>
            )
          } else {
            res = (
                <SingleRow>
                  <SingleRowPhoto src={row[0].url}></SingleRowPhoto>
                </SingleRow>
              )
          }
          return res;
        })
      }
      </ColPhotosBox>
    </ModalDiv>
  );
};

export default ModalCarousel;

