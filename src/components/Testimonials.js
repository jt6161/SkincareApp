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
              <Text style={styles.textStyle}>
                I love using 420 Skincare lotion for my skin condition.
                I don't like to use steroids on my skin and love your all
                natural lotions and soaps. The cbd lotion makes my skin feel so much better. Jenn
              </Text>
            </Content>
          </CardItem>
          <CardItem>
            <Content padder style={{ backgroundColor: '#FFF', padding: 5 }}>
            <Form>
              <Textarea
                rowSpan={8}
                style={styles.textStyle2}
                bordered placeholder="Share your 420 Skincare experience"
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
