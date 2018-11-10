import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import {
  Container,
  Content,
  Button,
  Row,
  Text
} from 'native-base';
import { Actions } from 'react-native-router-flux';

const fourtwentylogo = require('./420skincare_logo.png');

const medibleslogo = require('./420medibles_logo.png');

export default class Menu extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content padder style={{ backgroundColor: '#000', padding: 10 }}>
          <Row>
            <Image
              source={fourtwentylogo}
              style={{ width: 150, height: 80, alignSelf: 'center' }}
            />
            <Image
                source={medibleslogo}
                style={{ width: 150, height: 80, alignSelf: 'center' }}
            />
            </Row>

          <Button
            block small danger
            style={styles.mb15}
            onPress={() => { Actions.Home(); }}
          >
            <Text>Home</Text>
          </Button>

          <Button
            block small primary
            style={styles.mb15}
            onPress={() => { Actions.About(); }}
          >
            <Text>About 420 Skincare</Text>
          </Button>

          <Button
            block small success
            style={styles.mb15}
            onPress={() => { Actions.Products(); }}
          >
            <Text>CBD Products</Text>
          </Button>


          <Button
            block small warning
            style={styles.mb15}
            onPress={() => { Actions.Testimonials(); }}
          >
            <Text>Customer Testimonials</Text>
          </Button>

          <Button
            block small primary
            style={styles.mb15}
            onPress={() => { Actions.Press(); }}
          >
            <Text>News Articles</Text>
          </Button>

          <Button
            block small success
            style={styles.mb15}
            onPress={() => { Actions.Medibles(); }}
          >
            <Text>420 Medibles</Text>
          </Button>

          <Button
            block small info
            style={styles.mb15}
            onPress={() => { Actions.THCProducts(); }}
          >
            <Text>THC Products</Text>
          </Button>

          <Button
            block small danger
            style={styles.mb15}
            onPress={() => { Actions.Dispensary(); }}
          >
            <Text>Dispensary List</Text>
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
    paddingTop: 3,
    paddingBottom: 3
  },
  copyright: {
    fontSize: 12,
    padding: 5,
    fontWeight: 'bold',
    color: '#ab8321',
    alignSelf: 'center'
  }
});
