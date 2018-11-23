import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Cart extends Component {
  render() {
    return (
      <WebView
         source={{ uri: 'https://www.420-skincare.com/cart' }}
      />
    );
  }
}
