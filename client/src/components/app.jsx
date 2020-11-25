import React from 'React';
import ItemDetailPage from './ItemDetailPage.jsx';
import ModalCarousel from './ModalCarousel.jsx';
import $ from 'jquery';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      photos: [],
      modalIsVisible: false,
      isLoading: true,
    }
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: `/api/PhotoCarousel/${this.id}/photos`,
      dataType: 'json',
    }).done(photos => {
      console.log(Array.isArray(photos));
      this.setState({photos, isLoading: false,});
    }).fail(err => {
      console.log('Error: failed ajax GET /api/:id/photos');
    });
  };

  handleClick() {
    console.log('app.jsx::handleClick()');
    this.setState({modalIsVisible: true});
  };

  render() {
    if (this.state.isLoading) {
      return (<div><h2>...Loading</h2></div>)
    }
    if (!this.state.modalIsVisible) {
      return (
        <div onClick={this.handleClick}>
          <h1>TESTING 1 2 3 A B C</h1>
          <ItemDetailPage photos={this.state.photos}/>
        </div>
      );
    } else {
      return (
        <div>
          <ItemDetailPage photos={this.state.photos}>
          </ItemDetailPage>
          <ModalCarousel organizedPhotos={this.state.organizedPhotos}>
          </ModalCarousel>
        </div>
      );
    }
  };

}

export default App;
