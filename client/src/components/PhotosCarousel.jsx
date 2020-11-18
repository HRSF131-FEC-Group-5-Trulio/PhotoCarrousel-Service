import React from 'react';
import $ from 'jquery'; // for ajax

class PhotosCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      photos: [], // GET by componentDidRender()
    }
  }

  render() {
    return(
      <div className="photo-carousel">
        {
          this.state.photos.map(photo => (
            <img className={"photo"} src={photo.url}/>
          ))
        }
      </div>
    )
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