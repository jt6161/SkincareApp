import React, { Component } from 'react';
import { Container, Content, Text, Body, Button, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class pageOne extends Component {
  render() {
    return (

                <Content>
                        <CardItem>
                          <Body>
                            <Text>
                                This is Page One, Press button to goto page two
                            </Text>
                          </Body>
                        </CardItem>

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
