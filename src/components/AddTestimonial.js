import React, { Component } from 'react';
import {
  Button,
  Container,
  Content,
  Card,
  CardItem,
  Form,
  Text,
  Header,
  Textarea
} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class Addtestimonial extends Component {
  state = {
    review: ''
  }
  render() {
    return (
      <Container>
        <Header>
          <Image
            source={require('./420skincare_logo.png')}
            style={{ width: 100, height: 80, alignSelf: 'center' }}
          />
        </Header>
        <Card>
        <CardItem>
        <Content padding>
          <Form>
            <Textarea
              rowSpan={5}
              style={styles.textStyle2}
              bordered placeholder="Share your 420 Skincare experience."
              onChangeText={(data) => {
                this.setState({ review: data });
              }}
            />
          </Form>
          </Content>
        </CardItem>
            <Button
              block small success
              style={styles.mb15}
              onPress={() => { this.addtestimonial(); }}
            >
              <Text>Submit</Text>
            </Button>
          </Card>
      </Container>
    );
  }
  addtestimonial() {
    axios.post('http://localhost:8000/testimonials', this.state).then((res) => {
      if (res.data.success === true) {
          Actions.Testimonials(this.state);
      } else {
      console.log('Add testimonial error');
      }
    });
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
