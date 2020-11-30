import React from 'react';
import $ from 'jquery'; // for ajax
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  // width: 1000px;
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
  // border: solid;
  height: 520px;
`;

const PhotosBoxParent = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  // border: solid;
  // width: 100%;
  width: 1000px;
  overflow: hidden;
  border-radius: 8px;
`;

const ColPhotosBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  // border: solid;
  height: 98%;
  margin-left: 5px;
  margin-top: 5px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const BigPhoto = styled.img`
  height: 510px;
  width: 744px;
  padding: 5px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

const LilPhoto = styled.img`
  max-height: 400px;
  max-width: 400px;
  flex-shrink: 0;
  // padding: 5px;
  // transform: scale(0.9);
  margin-bottom: 10px;
`;

const LilPhoto_upper = styled(LilPhoto)`
  // border-top-right-radius: 25px;
`;

const LilPhoto_lower = styled(LilPhoto)`
  // border-bottom-right-radius: 25px;
`;

const Social = styled.div`
  position: absolute;
  right: -15px;
  top: 7px;
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

const Tags = styled.div`
`;

const getTags = () => {
  return (<h1>From getTags()</h1>)
};

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
