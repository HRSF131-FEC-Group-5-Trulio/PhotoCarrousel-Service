import React from 'react';
import $ from 'jquery'; // for ajax
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  // border: solid;
  height: 500px;
  position: relative;
`;

const Photos = styled.div`
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.15);
  }
  display: flex;
  justify-content: center;
  width: 100%;
  // border: solid;
  height: 520px;
  transform: scale(1.1);
`;

// const PhotosBoxContainer = styled.div`
//   position: relative;
//   border: solid red;
// `;

const PhotosBoxParent = styled.div`
  display: flex;
  justify-content: center;
  // position: relative;
  // border: solid;
  // width: 100%;
  width: 1100px;
  overflow: hidden;
  border-radius: 8px;
  transform: scale(0.9);
  position: absolute;
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
  // border-top-right-radius: 25px;
  // border-bottom-right-radius: 25px;
`;

const BigPhoto = styled.img`
  height: 510px;
  width: 744px;
  padding: 5px;
  // border-top-left-radius: 25px;
  // border-bottom-left-radius: 25px;
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
  font-size: 12px;
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
  height: 40px;
  width: 100px;
`;

const SocialIcon = styled.div`
  padding: 5px;
  align-items: left;
`;

const SaveIcon = styled(SocialIcon)`
  height: 25px;
  width: 20px;
  // margin-top: -5px;
  margin-left: -10px;
  margin-right: 10px;
`;

const ShareIcon = styled(SocialIcon)`
  min-height: 50%;
  min-width: 50%;
  margin-top: -10px;
  margin-left: -10px;
`;

const SocialButtonText = styled.div`
  line-height: 30px;
  font-weight: bold;
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
  font-size: 12px;
`;

const Tags = styled.div`
  position: absolute;
  left: 8px;
  top: 7px;
  display: flex;
  flex-direction: row;
  padding: 8px;
  z-index: 20;
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
  font-size: 12px;
  font-weight: bold;
  // border: 1px black;
  justify-content: space-around;
`;

const Tag = styled.div`
  border-radius: 4px;
  border: 1px black;
  background-color: white;
  color: rgb(0, 178, 91);
  box-sizing: border-box;
  padding: 2px 4px;
  margin-right: 8px;
`;

const getTags = (newConstruction, quickMoveIn) => {
  if (newConstruction && quickMoveIn) {
    return (
      <Tags>
        <Tag>FOR SALE</Tag>
        <Tag>NEW CONSTRUCTION</Tag>
        <Tag>QUICK MOVE-IN</Tag>
      </Tags>
    )
  }
  if (newConstruction) {
    return (
      <Tags>
        <Tag>FOR SALE</Tag>
        <Tag>NEW CONSTRUCTION</Tag>
      </Tags>
    )
  }
  if (quickMoveIn) {
    return (
      <Tags>
        <Tag>FOR SALE</Tag>
        <Tag>QUICK MOVE-IN</Tag>
      </Tags>
    )
  }
  return (
    <Tags>
      <Tag>FOR SALE</Tag>
    </Tags>
  )
};

const ItemDetailPage = (props) => {
  return (
    <Page>
        <PhotosBoxParent>
          {
            getTags(props.newConstruction, props.quickMoveIn)
          }
          <Social>
            <SocialButton>
              <SaveIcon>
                <img src="https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/icons/like.svg"></img>
              </SaveIcon>
              <SocialButtonText>
                Save
              </SocialButtonText>
            </SocialButton>
            <SocialButton>
              <ShareIcon>
                <img src="https://fec-demo.s3-us-west-1.amazonaws.com/S3_images/icons/share.svg"></img>
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
