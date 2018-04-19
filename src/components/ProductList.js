import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ProductList extends Component {

componentDidMount() {
  console.log('componentDidMount in ProductList');
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
