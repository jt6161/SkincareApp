import React, { Component } from 'react';
// import { Image } from 'react-native';
import {
  Container,
  Button,
  Text,
  Content,
  Card,
  CardItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import TestimonialScroll from './TestimonialScroll';
import Header from './Header';

export default class Testimonials extends Component {
  render() {
    return (
      <Container>
      <Header />
        <Card style={{ flex: 0.90 }}>
          <CardItem bordered>
            <Content padding>
              <TestimonialScroll />
            </Content>
          </CardItem>

          <Button
            block small success
            style={{ margin: 10, padding: 10 }}
            onPress={() => { Actions.AddTestimonial(); }}
          >
            <Text>Share Your Experience</Text>
          </Button>
        </Card>
      </Container>
    );
  }

}
