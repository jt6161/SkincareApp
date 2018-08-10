import React, { Component } from 'react';
import { Image, View, ScrollView } from 'react-native';
import {
  Container,
  Header,
  Button,
  Text,
  Content,
  Card,
  CardItem,
  Left,
  List,
  ListItem,
  Body,
  Thumbnail,
  Right
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Cart extends Component {
  renderProducts() {
    return this.props.fetchCart().map(item => (
      <Content padding>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                small square
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
          </List>
      </Content>
    ));
  }
  render() {
    return (
      <Container>
        <Header>
          <Image
            source={require('./420skincare_logo.png')}
            style={{ width: 100, height: 100, alignSelf: 'center' }}
          />
        </Header>

        <Card style={{ flex: 0.70 }}>
          <CardItem bordered>
            <Content>
                {this.renderProducts()}
            </Content>

            </CardItem>
            <Text
                style={{
                color: '#ab8321',
                fontSize: 14,
                padding: 10,
                fontWeight: 'bold',
                alignSelf: 'center' }}
                onPress={() => { Actions.Products(); }}
            >
              Continue Shopping
            </Text>

              <Button
                block small success
                style={{ padding: 10 }}
                // onPress={() => { Actions.StripeCheckout(); }}
              >
              <Text>Checkout</Text>
              </Button>
        </Card>
      </Container>
    );
  }
}
