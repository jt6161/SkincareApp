import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import Home from './src/components/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Home />
      </View>
    );
  }
}
