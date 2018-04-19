import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class ProductList extends Component {
    state = { albums: [] };

componentDidMount() {
    axios.get('https//rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
}

  render() {
  return (
    <View>
      <Text>Product List!</Text>
    </View>
  );
 }
}

export default ProductList;
