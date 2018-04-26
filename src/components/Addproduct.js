import React, { Component } from 'react';
import { Button, Container, Content, Form, Item, Input, Label, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class Addproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img_url: '',
      description: '',
      price: '',
      url: ''
    };
  }

  render() {
    return (
      <Container>
        <Content padding>
          <Form>
            <Item stackedLabel >
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
            <Item stackedLabel last>
              <Label>Product Page Url (Optional)</Label>
              <Input
                onChangeText={(data) => {
                  this.setState({ url: data });
                }}
              />
            </Item>
            <Button
              Button block success
              onPress={axios.post('http://localhost:8000/products', this.state).then((res) => {
                console.log(res);
                if (res.data.success === true) {
                  Actions.Products(this.state);
                }
            })
            }
            >
            <Text>Submit New Product</Text>
          </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Addproduct;
