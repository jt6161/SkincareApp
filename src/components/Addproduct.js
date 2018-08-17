import React, { Component } from 'react';
import { Button, Container, Content, Form, Item, Input, Label, Text, Header } from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class Addproduct extends Component {
  state = {
    name: '',
    img_url: '',
    description: '',
    price: ''
  }
  render() {
    return (
      <Container>
        <Header transparent>
          <Image
            source={require('./420skincare_logo.png')}
            style={{ width: 100, height: 100, alignSelf: 'center' }}
          />
        </Header>
        <Content padding>
          <Form>
            <Item stackedLabel>
              <Label>Name of Product</Label>
              <Input
              onChangeText={(data) => {
                this.setState({ name: data });
              }}
              />
            </Item>
            <Item stackedLabel>
              <Label>Product Image Url</Label>
              <Input
                onChangeText={(data) => {
                  this.setState({ img_url: data });
                }}
              />
            </Item>
            <Item stackedLabel>
              <Label>Product Description</Label>
              <Input
                onChangeText={(data) => {
                  this.setState({ description: data });
                }}
              />
            </Item>
            <Item stackedLabel>
              <Label>Price of Product</Label>
              <Input
                onChangeText={(data) => {
                  this.setState({ price: data });
                }}
              />
            </Item>
            <Button
              Button block success
              onPress={() => { this.addproduct(); }}
            >
            <Text>Submit New Product</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
  addproduct() {
    axios.post('https://server420skincare.herokuapp.com/products', this.state).then((res) => {
      if (res.data.success === true) {
          Actions.Products(this.state);
      } else {
      console.log('Add product error');
      }
    });
  }
}
