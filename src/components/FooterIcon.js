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
               onPress={() => { Actions.Menu(); }}
             />
             <Text>Menu</Text>
            </Button>

            {/* <Body /> */}

            <Button>
             <Icon
               name='cart'
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
