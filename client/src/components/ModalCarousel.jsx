import React from 'react';
import $ from 'jquery'; // for ajax
import styled from 'styled-components';
import { ModalCarouselStyle, PhotosBoxParent, ColPhotosBox, BigPhoto, LilPhoto, ModalCarouselContainer } from './styledComponents.jsx'

const ModalDiv = styled.div`
  z-index: 10;
  height: 900px;
  width: 1560px;
  background-color: red;
  position: absolute;
  top: 50px;
`;

const ModalCarousel = (props) => {
  return (
    <ModalDiv>
      <h1>Modal Rendering</h1>
    </ModalDiv>
  )
  // return(
  //   <ModalCarouselContainer>
  //      <PhotosBoxParent>
  //           <BigPhoto src={props.photos[0].url}></BigPhoto>
  //         <ColPhotosBox>
  //           <LilPhoto src={props.photos[1].url}></LilPhoto>
  //           <LilPhoto src={props.photos[2].url}></LilPhoto>
  //         </ColPhotosBox>
  //       </PhotosBoxParent>
  //   </ModalCarouselContainer>
  // );
};

export default ModalCarousel;

