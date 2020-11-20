import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; // for ajax
import styled from 'styled-components';
import { PhotosBoxParent, ColPhotosBox, BigPhoto, LilPhoto } from './styledComponents.jsx'

const ItemDetailPage = (props) => {
  {
    return(
      <PhotosBoxParent>
          <BigPhoto src={props.photos[0].url}></BigPhoto>
        <ColPhotosBox>
          <LilPhoto src={props.photos[1].url}></LilPhoto>
          <LilPhoto src={props.photos[2].url}></LilPhoto>
        </ColPhotosBox>
      </PhotosBoxParent>
    )
  };
}

export default ItemDetailPage;
