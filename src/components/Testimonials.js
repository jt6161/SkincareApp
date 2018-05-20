import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Button,
  Text,
  Content,
  Textarea,
  Form
} from 'native-base';

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
        <Content padder>
          <Text style={styles.textStyle}>
            I use 420 Skincare lotion for my skin condition.
            I don't like to use steroids on my skin and love your all
            natural lotions and soaps. They make my skin feel so much better. </Text>
            <Text style={styles.textStyle}>
            Jenn</Text>
          <Form paddingTop={80}>
            <Textarea
              rowSpan={7}
              style={styles.textStyle2}
              bordered placeholder="Tell us your 420 Skincare experience"
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
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  },
  mb15: {
    marginBottom: 20,
    marginTop: 5
  },
  textStyle: {
    fontSize: 16,
    padding: 5,
    fontWeight: 'bold',
    color: '#ab8321'
  },
  textStyle2: {
    fontSize: 14,
    padding: 5
  }
});
