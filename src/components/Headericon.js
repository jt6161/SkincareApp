import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Header } from 'native-base';

const fourtwentylogo = require('./420skincare_logo.png');

export default class HeaderIcon extends Component {
  render() {
    return (
    <View>
      <Header>
        <Image
            source={fourtwentylogo}
            style={{
            height: 100,
            width: 100,
            alignSelf: 'center'
          }}
        />
      </Header>
    </View>
    );
  }
}
