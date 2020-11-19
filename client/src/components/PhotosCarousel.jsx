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
  padding: 10px;
`;

class PhotosCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      photos: [], // GET by componentWillRender()
    }
  }

  // render() {
  //   return(
  //     <div className="photo-carousel">
  //       {
  //         this.state.photos.map(photo => (
  //           <img className={"photo"} src={photo.url}/>
  //         ))
  //       }
  //     </div>
  //   )
  // }

  render() {
    return this.state.photos.length
    ? (<div className="photo-carousel">
        <PhotosBoxParent>
            <BigPhoto src={this.state.photos[0].url}></BigPhoto>
          <ColPhotosBox>
            <LilPhoto src={this.state.photos[1].url}></LilPhoto>
            <LilPhoto src={this.state.photos[2].url}></LilPhoto>
          </ColPhotosBox>
        </PhotosBoxParent>
      </div>)
    : (<p>...loading</p>);
  }

  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: `/api/homes/${this.id}/photos`,
      dataType: 'json',
    }).done(photos => {
      console.log(photos);
      this.setState({photos})
    }).fail(err => {

    });
  }

}

export default PhotosCarousel;