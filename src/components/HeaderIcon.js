import React, { Component } from 'react';
import { Image } from 'react-native';
import { Header, Left, Body, Right, Button, Icon } from 'native-base';

export default class HeaderIcon extends Component {
  render() {
    return (
      <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
            <Body>
              <Image
                source={{ uri: 'https://static.wixstatic.com/media/dbda37_b4905467220149a392ae67875a217abf~mv2.png/v1/fill/w_381,h_132,al_c,usm_0.66_1.00_0.01/dbda37_b4905467220149a392ae67875a217abf~mv2.png' }}
                style={{ width: 100, height: 35 }}
              />
            </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    );
  }
}
