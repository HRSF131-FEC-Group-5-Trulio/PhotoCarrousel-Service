import React from 'React';
import ItemDetailPage from './ItemDetailPage.jsx';
import ModalCarousel from './ModalCarousel.jsx';
import $ from 'jquery';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Roboto, "Segoe UI Bold", Arial, sans-serif;
`;

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
    this.closeModal = this.closeModal.bind(this);
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

  closeModal() {
    console.log("app.jsx::closeModal()");
    this.setState({modalIsVisible: false});
  }

  render() {
    if (this.state.isLoading) {
      return (<div><h2>...Loading</h2></div>)
    }
    if (!this.state.modalIsVisible) {
      return (
        <AppContainer onClick={this.handleClick}>
          <ItemDetailPage photos={this.state.listing.photos}/>
        </AppContainer>
      );
    } else {
      return (
        <AppContainer>
          <ItemDetailPage photos={this.state.listing.photos}>
          </ItemDetailPage>
          <ModalCarousel listing={this.state.listing} closeModal={this.closeModal}>
          </ModalCarousel>
        </AppContainer>
      );
    }
  };

}

export default App;
