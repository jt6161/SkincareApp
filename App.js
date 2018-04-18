import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/home';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Shake shake shake your booty to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
