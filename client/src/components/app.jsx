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
      organizedPhotos: [],
      modalIsVisible: false,
      isLoading: true,
    }
    this.handleClick = this.handleClick.bind(this);
    this.loadedOperations = this.loadedOperations.bind(this);
  };

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: `/api/homes/${this.id}/photos`,
      dataType: 'json',
    }).done(photos => {
      console.log('about to organize photos');
      this.loadedOperations(photos);
    }).fail(err => {
      console.log('Error: failed ajax GET /api/homes/:id/photos');
    });
  };

  loadedOperations(photos) {
    console.log('loadedOperations()...');
    let organizedPhotos = [];
    let n = [...photos];
    while (n.length >= 6) {
      organizedPhotos.push(n.splice(-3, 3));
      organizedPhotos.push(n.splice(-2, 2));
      organizedPhotos.push(n.splice(-1, 1));
    }
    while (n.length > 2) {
      organizedPhotos.push(n.splice(-2, 2));
    }
    while (n.length > 0) {
      organizedPhotos.push(n.splice(-1, 1));
    }
    this.setState({photos, organizedPhotos, isLoading: false,});
  }

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
