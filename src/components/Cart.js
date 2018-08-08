import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Button,
  Text,
  Content,
  Card,
  CardItem,
  List,
  ListItem,
  Body
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Cart extends Component {
  renderProducts(){
    return this.props.fetchCart().map(item=>{
      return (
        <ListItem>
          <Body>
            <Text>{item.name}</Text>
            <Text note>${item.price}</Text>
          </Body>
      </ListItem>
      )
    })
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
        <Card style={{ flex: 1 }}>
          <CardItem bordered>
            <Content padding>
              <List>

                {this.renderProducts()}
              </List>
            </Content>
          </CardItem>
          <Text
              style={{
              color: '#ab8321',
              fontSize: 13,
              padding: 20,
              fontWeight: 'bold',
              alignSelf: 'center' }}
              onPress={() => { Actions.Products(); }}
          >
            Continue Shopping
          </Text>
          {/* <Button
            block small info
            onPress={() => { Actions.Products(); }}
          >
              <Text>Continue Shopping</Text>
          </Button> */}

          <Button
            block small success
            // onPress={() => { Actions.Products(); }}
          >
            <Text>Checkout</Text>
          </Button>

        </Card>
      </Container>
    );
  }
}
