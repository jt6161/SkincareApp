import React, { Component } from 'react';
import {
  Container,
  Body,
  Button,
  Text,
  Content,
  ListItem,
  Right,
  Left,
  List,
  Thumbnail
} from 'native-base';
import { Actions } from 'react-native-router-flux';
// import Icon from 'react-native-vector-icons/Ionicons';
// import HeaderIcon from './HeaderIcon';

const shippingRate = 6.90;

export default class Cart extends Component {
  renderProducts() {
    console.log('IN CART');
    return this.props.fetchCart().map(item => (
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              small
              square
              source={{ uri: item.img_url }}
            />
          </Left>
          <Body>
            <Text>{item.name}</Text>
          </Body>
          <Right>
              <Text>${item.price}</Text>
          </Right>
        </ListItem>
      ));
  }

  render() {
    return (
      <Container>
        <Text
          style={{
          color: '#ab8321',
          fontSize: 12,
          padding: 5,
          fontWeight: 'bold',
          alignSelf: 'center'
          }}
          onPress={() => {
          Actions.Products();
          }}
        >
          Continue Shopping
        </Text>

      <Content>
        <List>
          {this.renderProducts()}

        </List>
      </Content>

        <Text
          style={{
          color: '#000',
          fontSize: 14,
          padding: 5,
          fontWeight: 'normal',
          alignSelf: 'center'
          }}
        >
        SubTotal
        </Text>

        <Text
          style={{
          color: '#000',
          fontSize: 14,
          padding: 5,
          fontWeight: 'normal',
          alignSelf: 'center'
          }}
        >
        Shipping and handling $6.90
        </Text>

        <Text
          style={{
          color: '#000',
          fontSize: 16,
          padding: 5,
          fontWeight: 'bold',
          alignSelf: 'center'
          }}
        >
        Total
        </Text>

        <Button
          block small success
          style={{ margin: 10, padding: 10 }}
        >
        <Text>Checkout</Text>
        </Button>
      </Container>
    );
  }
}
