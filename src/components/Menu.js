import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
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
            <Text>Products</Text>
          </Button>
          <Button
            block small primary
            style={styles.mb15}
            // onPress={() => { Actions.About(); }}
          >
            <Text>About</Text>
          </Button>
          <Button
            block small warning
            style={styles.mb15}
            // onPress={() => { Actions.Contact(); }}
          >
            <Text>Contact</Text>
          </Button>
          <Button
            block small danger
            style={styles.mb15}
            onPress={() => { Actions.Login(); }}
          >
            <Text>Admin</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  },
  mb15: {
    marginBottom: 20
  },
});

export default Menu;
