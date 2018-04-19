import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import Home from './src/components/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Cannabis Infused Luxury Skincare'} />
        <Home />
      </View>
    );
  }
}
