import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Body,
  Button,
  Text,
  Content,
  Card,
  CardItem,
  ListItem,
  Right,
  Left,
  List,
  Thumbnail
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Cart extends Component {
  renderProducts() {
    console.log('IN CART');
    return this.props.fetchCart().map(item => (
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              // small
              square
              source={{ uri: item.img_url }}
            />
          </Left>
          <Body>
            <Text note numberOfLines={1}>{item.name}</Text>
            <Text>${item.price}</Text>
          </Body>
          <Right>
            <Button transparent>
              <Text>Remove</Text>
            </Button>
          </Right>
        </ListItem>
      ));
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

              <Content>
                <List>
                {this.renderProducts()}
                </List>
              </Content>

                <Text
                    style={{
                    color: '#ab8321',
                    fontSize: 14,
                    padding: 5,
                    fontWeight: 'bold',
                    alignSelf: 'center' }}
                    onPress={() => { Actions.Products(); }}
                >
                  Continue Shopping
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
