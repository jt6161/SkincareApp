import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class ProductPage extends Component {

  render() {
    console.log(this.url);
    return (
      <WebView
         source={{ uri: 'https://www.420-skincare.com/product-page/cbd-bath-salts-lavender-1' }}
         // source={{ uri: this.url }}
      />
    );
  }
}
