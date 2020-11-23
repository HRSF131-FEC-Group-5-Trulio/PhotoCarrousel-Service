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

const BigPhoto = styled.img`
height: 500px;
width: 744px;
padding: 10px;
`;

const LilPhoto = styled.img`
height: 250px;
width: 248px;
padding: 5px;
`;


const ItemDetailPage = (props) => {
  return (
    <PhotosBoxParent>
      <BigPhoto src={props.photos[0].url}></BigPhoto>
      <ColPhotosBox>
        <LilPhoto src={props.photos[1].url}></LilPhoto>
        <LilPhoto src={props.photos[2].url}></LilPhoto>
      </ColPhotosBox>
    </PhotosBoxParent>
  );
}

export default ItemDetailPage;
