import React, { Component } from 'react';
import { Button, Container, Content, Form, Item, Input, Label, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  componentDidMount() {
    axios.get('http://localhost:8000/admin')
      .then(response => this.setState({ username: response.data, password: response.data }));
  }

  render() {
    return (
      <Container>
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
                onChangeText={(data) => {
                this.setState({ password: data });
              }}
              />
            </Item>
            <Button
              Button block success
              onPress={() => { Actions.Addproduct(this.state); }}
            >
            <Text>Sign In</Text>
          </Button>
          </Form>
        </Content>
      </Container>
    );
  }

  login() {

  }
}
