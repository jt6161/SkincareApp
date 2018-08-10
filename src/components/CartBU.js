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
  Body,
  Thumbnail,
  Right
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Cart extends Component {
  renderProducts() {
    return this.props.fetchCart().map(item => (
          <View>
            <ScrollView>
            <Thumbnail
            source={{ uri: item.img_url }}
            />
            <Text> {item.name}</Text>
            <Text>  ${item.price}</Text>
            </ScrollView>
          </View>
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
        <Card style={{ flex: 0.80 }}>
          <CardItem bordered>
            <Content padding>
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
                style={{ margin: 10, padding: 10 }}
                // onPress={() => { Actions.StripeCheckout(); }}
              >
              <Text>Checkout</Text>
              </Button>
        </Card>
      </Container>
    );
  }
}
