import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class ProductPage5 extends Component {

  render() {
    return (
      <WebView
         source={{ uri: 'https://www.420-skincare.com/product-page/cbd-soap-blueberry-orange' }}
      />
    );
  }
}
