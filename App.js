import React from 'react';
import { View } from 'react-native';
import Headerlg from './src/components/Headerlg';
import Home from './src/components/Home';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Headerlg />
        <Home />
      </View>
    );
  }
}
