import React, { Component } from 'react';
import { Content, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class pageOne extends Component {
  render() {
    return (
                <Content>
                        <Button
                          dark bordered
                          onPress={() => { Actions.pageTwo(); }}
                        >
                          <Text>Goto Page 2</Text>
                         </Button>
                         <Button
                           dark bordered
                           onPress={() => { Actions.About(); }}
                         >
                           <Text>Goto About</Text>
                          </Button>
                          <Button
                            dark bordered
                            onPress={() => { Actions.Home(); }}
                          >
                            <Text>Goto Home</Text>
                           </Button>
                 </Content>

    );
  }
}
