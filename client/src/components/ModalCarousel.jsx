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

  // Repeat, until you've got them all:
  //   Make 2 Big Photos in a row
  //   Make 3 Small Photos in a row

  return (
    <h1>Hello from MODAL!</h1>
    // <ModalDiv>
    //   <ColPhotosBox>
    //   {

    //   }
    //   </ColPhotosBox>
    // </ModalDiv>
  );

  // return (
  //   <ModalDiv>
  //     <h1>Modal Rendering</h1>
  //     {props.photos.map(photo => (
  //       <LilPhoto src={photo.url}></LilPhoto>
  //     ))}
  //   </ModalDiv>
  // )
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

