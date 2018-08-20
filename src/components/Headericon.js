import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Header } from 'native-base';

export default class HeaderIcon extends Component {
  render() {
    return (
    <View>
      <Header transparent>
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
