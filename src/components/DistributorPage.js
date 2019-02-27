import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class DistributorPage extends Component {

  render() {
    return (
      <WebView
         source={{ uri: 'https://www.420-skincare.com/distributors' }}
      />
    );
  }
}
