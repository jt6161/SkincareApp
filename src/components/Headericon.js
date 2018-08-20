import React, { Component } from 'react';
import { View } from 'react-native';
import { Image } from 'native-base';

export default class Header extends Component {
  render() {
    return (
    <View>
      <Header transparent="transparent">
        <Image
            source={require('./420skincare_logo.png')}
            style={{
            width: 100,
            height: 100,
            alignSelf: 'center'
          }}
        />
      </Header>
    </View>
    );
  }
}
