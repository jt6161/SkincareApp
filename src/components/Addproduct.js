import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label } from 'native-base';

export default class Addproduct extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
