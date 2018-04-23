import React, { Component } from 'react';
import {
  Content, Text, Button
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class pageTwo extends Component {
  render() {
    return (
                <Content>
                <Button
                  dark bordered style={{ alignSelf: 'center', margin: 30 }}
                  onPress={() => { Actions.pop(); }}
                >
                     <Text>Goto Page 1</Text>
                 </Button>
                 </Content>

    );
  }
}
