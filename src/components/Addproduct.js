import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Addproduct extends Component {
  render() {
    return (
      <Container>
        <Content padding>
          <Form>
            <Item stackedLabel>
              <Label>Name of Product</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Product Image Url</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Product Description</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Price of Product</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Product Page Url (Optional)</Label>
              <Input />
            </Item>
            <Button
              Button block success
              onPress={ }
            >
            <Text>Submit New Product</Text>
          </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
