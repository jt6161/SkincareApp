import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Header } from 'native-base';

const logoimage = require('./420skincare_logo.png');

export default class HeaderIcon extends Component {
  render() {
    return (
    <View>
      <Header transparent>
        <Image
            source={logoimage}
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
