import React, { Component } from 'react';
import { Button, Container, Content, Form, Item, Input, Label, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import HeaderIcon from './HeaderIcon';

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  render() {
    return (
      <Container>
        <HeaderIcon />
        <Content padding>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input
              onChangeText={(data) => {
                this.setState({ username: data });
              }}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                onChangeText={(data) => {
                this.setState({ password: data });
              }}
              />
            </Item>
            <Button
              Button block success
              onPress={() => { this.login(); }}
            >
            <Text>Sign In</Text>
          </Button>
          </Form>
        </Content>
      </Container>
    );
  }
  login() {
    axios.post('http://localhost:8000/admin/login', this.state).then((res) => {
      if (res.data.success === true) {
        console.log('success');
         Actions.Addproduct(this.state);
        } else {
        console.log('Login error');
        }
    });
  }
}
