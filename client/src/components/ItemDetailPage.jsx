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
  justify-content: top;
`;

const BigPhoto = styled.img`
  height: 510px;
  width: 744px;
  padding: 5px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

const LilPhoto_upper = styled.img`
  height: 250px;
  width: 248px;
  padding: 5px;
  border-top-right-radius: 25px;
`;

const LilPhoto_lower = styled.img`
  height: 250px;
  width: 248px;
  padding: 5px;
  border-bottom-right-radius: 25px;
`;


const ItemDetailPage = (props) => {
  return (
    <PhotosBoxParent>
      <BigPhoto src={props.photos.large[0]}></BigPhoto>
      <ColPhotosBox>
        <LilPhoto_upper src={props.photos.small[0]}></LilPhoto_upper>
        <LilPhoto_lower src={props.photos.small[1]}></LilPhoto_lower>
      </ColPhotosBox>
    </PhotosBoxParent>
  );
}

export default ItemDetailPage;
