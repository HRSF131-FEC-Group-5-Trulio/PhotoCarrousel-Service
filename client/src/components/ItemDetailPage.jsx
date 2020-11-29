import React from 'react';
import $ from 'jquery'; // for ajax
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  // line-item: center;
  // border: solid;
  // overflow: hidden;
`;

const Photos = styled.div`
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.04);
  }
  display: flex;
  justify-content: center;
  width: 100%;
`;

const PhotosBoxParent = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  // border: solid;
  width: 55%;
  overflow: hidden;
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

const Social = styled.div`
  position: absolute;
  right: 0%;
  display: flex;
  flex-direction: row;
  padding: 8px;
  z-index: 20;
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
`;

const SocialButton = styled.button`
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  text-align: center; // icon collisions?
  font-weight: bold;
  white-space: nowrap;
  line-height: 1.5;
  padding: 8px 16px;
  color: rgb(59, 65, 68);
  background-color: rgb(255, 255, 255);
  border-color: rgb(205, 209, 212);
  display: flex;
  flex-direction: row;
  margin-right: 25px;
  &:hover {
    background-color: rgb(235, 235, 235);
  }
`;

const SocialIcon = styled.div`
  // float: left;
  padding: 5px;
  align-items: left;
  // margin-left: 4px;
  // right: 0px;
  // stroke: red;
  // background-color: red;
  // color: blue;
`;

const SaveIcon = styled(SocialIcon)`
  height: 17px;
  width: 17px;
`;

const ShareIcon = styled(SocialIcon)`
  height: 27px;
  width: 27px;
  margin-top: -5px;
`;

const SocialButtonText = styled.div`
  line-height: 30px;
`;

const ItemDetailPage = (props) => {
  return (
    <Page>
      <PhotosBoxParent>
        <Social>
          <SocialButton>
            <SaveIcon>
              <img src="./icons/like.svg"></img>
            </SaveIcon>
            <SocialButtonText>
              Save
            </SocialButtonText>
          </SocialButton>
          <SocialButton>
            <ShareIcon>
              <img src="./icons/share.svg" style={{"color":"red"}}></img>
            </ShareIcon>
            <SocialButtonText>
              Share
            </SocialButtonText>
          </SocialButton>
        </Social>
        <Photos>
          <BigPhoto src={props.photos.large[0]}></BigPhoto>
          <ColPhotosBox>
            <LilPhoto_upper src={props.photos.small[0]}></LilPhoto_upper>
            <LilPhoto_lower src={props.photos.small[1]}></LilPhoto_lower>
          </ColPhotosBox>
        </Photos>
      </PhotosBoxParent>
    </Page>
  );
}

export default ItemDetailPage;
