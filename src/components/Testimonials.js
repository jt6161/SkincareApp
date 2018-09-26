import React, { Component } from 'react';
import {
  Container,
  Button,
  Text,
  Content,
  Card,
  CardItem,
  Spinner
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import TestimonialScroll from './TestimonialScroll';
import HeaderIcon from './HeaderIcon';

export default class Testimonials extends Component {
  render() {
    return (
      <Container>
      <HeaderIcon />
        <Card style={{ flex: 0.90 }}>
          <CardItem bordered>
            <Content padding>
              <Spinner color='#ab8321' />
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
