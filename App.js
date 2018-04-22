import React from 'react';
import { View } from 'react-native';
import HeaderIcon from './src/components/HeaderIcon';
import Home from './src/components/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderIcon />
        <Home />
      </View>
    );
  }
}
