import React, { Component } from 'react';
import { Button, Container, Content, Form, Item, Input, Label, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content padding>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button
              Button block success
              onPress={() => { Actions.Addproduct(); }}
            >
            <Text>Sign In</Text>
          </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
