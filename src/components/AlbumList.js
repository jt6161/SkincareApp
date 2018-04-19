import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    axios.get('https://www.420-skincare.com/_functions/myfunction')
      .then(response => this.setState({ product: response.data }));
  }

  renderProducts() {
    return this.state.products.map(product =>
      <AlbumDetail key={product.title} product={product} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderProducts()}
      </ScrollView>
    );
  }
}

export default AlbumList;
