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
  List,
  Right
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Cart extends Component {
  renderProducts() {
    console.log('IN CART');
    return this.props.fetchCart().map(item => (
        <ListItem>
          <Body>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </Body>
          <Right>
            <Button transparent>
              <Text>+ or -</Text>
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
        <Card style={{ flexGrow: 0.70 }}>
          <CardItem>

              <Content>
                {this.renderProducts()}
              </Content>

            </CardItem>

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
        </Card>
      </Container>
    );
  }
}
