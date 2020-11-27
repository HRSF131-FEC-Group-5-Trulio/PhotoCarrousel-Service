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
      listing: null,
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
        listing: listing,
      });
    }).fail(err => {
      console.log('Error: failed ajax GET /api/:id/everything');
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
        <div style={{"font":"Helvetica"}} onClick={this.handleClick}>
          <ItemDetailPage photos={this.state.listing.photos}/>
        </div>
      );
    } else {
      return (
        <div style={{"font":"Helvetica"}}>
          <ItemDetailPage photos={this.state.listing.photos}>
          </ItemDetailPage>
          <ModalCarousel listing={this.state.listing}>
          </ModalCarousel>
        </div>
      );
    }
  };

}

export default App;
