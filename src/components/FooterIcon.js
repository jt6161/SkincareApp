import React, { Component } from 'react';
import { View } from 'react-native';
import { Footer, Left, Body, Right, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FooterIcon extends Component {
  render() {
    return (
      <View>
        <Footer>
          <Left>
            <Text
              style={{ color: '#ab8321', fontSize: 14, fontWeight: 'bold', margin: 10
             }}
              onPress={() => { Actions.Menu(); }}
            >
              MENU
            </Text>
          </Left>
            <Body />
          <Right>
            <Text
              style={{ color: '#ab8321', fontSize: 14, fontWeight: 'bold', margin: 10
             }}
              onPress={() => { Actions.Cart(); }}
            >
              CART
            </Text>
          </Right>
        </Footer>
      </View>
    );
  }
}
