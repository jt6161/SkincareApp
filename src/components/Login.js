import React, { Component } from 'react';
import { Container, Content, Form, Item, Input } from 'native-base';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
