import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import HeaderIcon from './src/components/HeaderIcon';
import Home from './src/components/Home';
import About from './src/components/About';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <HeaderIcon />
          <Home />
            <Router hideNavBar="true">
              <Scene key="root">
              <Scene key="About" component={About} initial="true" />
              </Scene>
            </Router>
      </View>
    );
  }
}
