import styled from 'styled-components';

module.exports = {

  ModalCarouselContainer: styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    height: 500px;
    overflow: hidden;
    max-height: calc(100vh - 275px);
    min-height: 275px;
  `,

  PhotosBoxParent: styled.div`
    display: flex;
    justify-content: center;
  `,

  ColPhotosBox: styled.div`
    display: flex;
    flex-direction: column;
  `,

  BigPhoto: styled.img`
    height: 500px;
    width: 744px;
    padding: 10px;
  `,

  LilPhoto: styled.img`
    height: 250px;
    width: 248px;
    padding: 5px;
  `,

  ModalCarouselStyle: styled.div`
    position: absolute;
    top: 50px;
    z-index: 5;
    height: 900px;
    width: 1560px;
    background-color: red;
  `,
};

/**
      <ModalCarouselStyle>
        ...from ModalCarousel with Love
        <PhotosBoxParent>
            <BigPhoto src={props.photos[0].url}></BigPhoto>
          <ColPhotosBox>
            <LilPhoto src={props.photos[1].url}></LilPhoto>
            <LilPhoto src={props.photos[2].url}></LilPhoto>
          </ColPhotosBox>
        </PhotosBoxParent>
      </ModalCarouselStyle>
 */