
import React, { Component } from 'react';
import { View } from 'react-native';
import { Footer, Icon, Button, FooterTab, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FooterIcon extends Component {
  render() {
    return (
      <View>
        <Footer>
          <FooterTab>

            <Button>
             <Icon
               name='menu'
               style={{ fontSize: 25, color: '#ab8321', fontWeight: 'bold' }}
               onPress={() => { Actions.Menu(); }}
             />
             <Text>Menu</Text>
            </Button>

            <Button>
             <Icon
               name='home'
               style={{ fontSize: 25, color: '#ab8321', fontWeight: 'bold' }}
               onPress={() => { Actions.Home(); }}
             />
             <Text>Home</Text>
            </Button>

            <Button>
             <Icon
               name='cart'
               style={{ fontSize: 25, color: '#ab8321', fontWeight: 'bold' }}
               onPress={() => { Actions.Cart(); }}
             />
             <Text>Cart</Text>
           </Button>

          </FooterTab>
        </Footer>
      </View>
    );
  }
}
