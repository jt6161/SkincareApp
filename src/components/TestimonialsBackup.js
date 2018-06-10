import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Button,
  Text,
  Content,
  Card,
  CardItem,
  Textarea,
  Form
} from 'native-base';
import TestimonialList from './TestimonialList';

export default class Testimonials extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Image
            source={require('./420skincare_logo.png')}
            style={{ width: 100, height: 100, alignSelf: 'center' }}
          />
        </Header>
        <Card style={{ flex: 0 }}>
          <CardItem bordered>
            <Content padder>
              <Text>
                <TestimonialList />
              </Text>
            </Content>
          </CardItem>

          <CardItem>
            <Content padder style={{ backgroundColor: '#FFF', padding: 5 }}>
            <Form>
              <Textarea
                rowSpan={5}
                style={styles.textStyle2}
                bordered placeholder="Share your 420 Skincare experience."
              />
            </Form>
              <Button
                block small primary
                style={styles.mb15}
                // onPress={() => { Actions.Home(); }}
              >
                <Text>Submit</Text>
              </Button>
            </Content>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mb15: {
    marginBottom: 5
  },
  textStyle: {
    fontSize: 17,
    padding: 5,
    fontWeight: 'bold',
    color: '#ab8321'
  },
  textStyle2: {
    fontSize: 14,
    padding: 5
  }
});
