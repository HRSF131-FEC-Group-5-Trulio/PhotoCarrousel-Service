import React from 'react';
import $ from 'jquery'; // for ajax
import styled from 'styled-components';

const PhotosBoxParent = styled.div`
  display: flex;
`;

const ColPhotosBox = styled.div`
  display: flex;
  flex-direction: column;
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
          <img src={this.state.photos[0].url}></img>
          <ColPhotosBox>
            <p>Let's put it thru its paces</p>
            <p>Let's check nesting flexboxes</p>
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