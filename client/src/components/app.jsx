import React from 'React';
import ItemDetailPage from './ItemDetailPage.jsx';
import ModalCarousel from './ModalCarousel.jsx';
import $ from 'jquery';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      modalIsVisible: false,
      isLoading: true,
      region: null,
      zipCode: null,
      address: null,
      price: null,
      beds: null,
      baths: null,
      photos: [],
      saved: null,
      newConstruction: null,
      quickMoveIn: null,
    }
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: `/api/PhotoCarousel/${this.id}/everything`,
      dataType: 'json',
    }).done(listing => {
      console.log(listing);
      this.setState({
        isLoading: false,
        photos: listing.photos,
        region: listing.region,
        zipCode: listing.zipCode,
        address: listing.address,
        price: listing.price,
        beds: listing.beds,
        baths: listing.baths,
        saved: listing.saved,
        newConstruction: listing.newConstruction,
        quickMoveIn: listing.quickMoveIn,
      });
    }).fail(err => {
      console.log('Error: failed ajax GET /api/:id/everything');
    });
  };

  // componentDidMount() {
  //   $.ajax({
  //     method: 'GET',
  //     url: `/api/PhotoCarousel/${this.id}/photos`,
  //     dataType: 'json',
  //   }).done(photos => {
  //     console.log(Array.isArray(photos));
  //     this.setState({photos, isLoading: false,});
  //   }).fail(err => {
  //     console.log('Error: failed ajax GET /api/:id/photos');
  //   });
  // };

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
          <ModalCarousel photos={this.state.photos}>
          </ModalCarousel>
        </div>
      );
    }
  };

}

export default App;
