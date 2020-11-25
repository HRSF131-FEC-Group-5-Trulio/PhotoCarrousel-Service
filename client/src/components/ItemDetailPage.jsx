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
      <BigPhoto src={props.photos.large[0]}></BigPhoto>
      <ColPhotosBox>
        <LilPhoto src={props.photos.small[0]}></LilPhoto>
        <LilPhoto src={props.photos.small[1]}></LilPhoto>
      </ColPhotosBox>
    </PhotosBoxParent>
  );
}

export default ItemDetailPage;
