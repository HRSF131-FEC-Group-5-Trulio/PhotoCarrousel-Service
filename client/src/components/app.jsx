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
      trippleRows: [],
      doubleRows: [],
      singleRows: [],
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

    // result array
    let trippleRows = [];
    let doubleRows = [];
    let singleRows = [];

    let n = photos.length;

    this.setState({photos, trippleRows, doubleRows, singleRows, isLoading: false,});
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
          <ModalCarousel
            trippleRows={this.state.trippleRows}
            doubleRows={this.state.doubleRows}
            singleRows={this.state.singleRows}
          >
          </ModalCarousel>
        </div>
      );
    }
  };

}

export default App;
