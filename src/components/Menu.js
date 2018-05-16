import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import {
  Container,
  Content,
  Button,
  Text
} from 'native-base';
import { Actions } from 'react-native-router-flux';

class Menu extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content padder style={{ backgroundColor: '#000', padding: 20 }}>
          <Image
            source={require('./420skincare_logo.png')}
            style={{ width: 150, height: 100, alignSelf: 'center' }}
          />
          <Button
            block small info
            style={styles.mb15}
            onPress={() => { Actions.Home(); }}
          >
            <Text>Home</Text>
          </Button>
          <Button
            block small success
            style={styles.mb15}
            onPress={() => { Actions.Products(); }}
          >
            <Text>CBD Products</Text>
          </Button>
          <Button
            block small primary
            style={styles.mb15}
            onPress={() => { Actions.About(); }}
          >
            <Text>About 420 Skincare</Text>
          </Button>
          <Button
            block small warning
            style={styles.mb15}
            // onPress={() => { Actions.Contact(); }}
          >
            <Text>Contact Us</Text>
          </Button>
          <Button
            block small danger
            style={styles.mb15}
            onPress={() => { Actions.Login(); }}
          >
            <Text>Admin Login</Text>
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
    marginBottom: 20
  },
});

export default Menu;
