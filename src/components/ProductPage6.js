import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class ProductPage6 extends Component {

  render() {
    return (
      <WebView
         source={{ uri: 'https://www.420-skincare.com/product-page/cbd-bath-bomb-pineapple' }}
      />
    );
  }
}
