import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Footer, Left, Body, Right } from 'native-base';

export default class FooterIcon extends Component {
  render() {
    return (
<View>
  <Footer>
          <Left />
            <Body>
              <Image
                source={{ uri: 'https://static.wixstatic.com/media/dbda37_b4905467220149a392ae67875a217abf~mv2.png/v1/fill/w_381,h_132,al_c,usm_0.66_1.00_0.01/dbda37_b4905467220149a392ae67875a217abf~mv2.png' }}
                style={{ width: 110, height: 40 }}
              />
            </Body>
          <Right />
  </Footer>
</View>
    );
  }
}
