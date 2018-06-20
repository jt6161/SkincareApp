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
  Body,
  Thumbnail
} from 'native-base';
// import { Actions } from 'react-native-router-flux';

export default class Cart extends Component {
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
                <ListItem>
                  <Thumbnail
                    square size={80}
                    source={require('./420skincare_logo.png')}
                  />
                  <Body>
                  />
                  <Text>This is my Shopping Cart product</Text>
                  <Text note>These is the details</Text>
                  </Body>
              </ListItem>
              <ListItem>
                <Thumbnail
                  square size={80}
                  source={require('./420skincare_logo.png')}
                />
                <Body>
                />
                <Text>This is my Shopping Cart product</Text>
                <Text note>These is the details</Text>
                </Body>
            </ListItem>
            <ListItem>
              <Thumbnail
                square size={80}
                source={require('./420skincare_logo.png')}
              />
              <Body>
              />
              <Text>This is my Shopping Cart product</Text>
              <Text note>These is the details</Text>
              </Body>
          </ListItem>
              </List>
            </Content>
          </CardItem>

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
