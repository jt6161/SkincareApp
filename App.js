import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import FooterIcon from './src/components/FooterIcon';
import Products from './src/components/Products';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Addproduct from './src/components/Addproduct';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Router hideNavBar="true">
              <Scene key="root">
              <Scene key="Home" component={Home} title="420 Skincare" initial />
              <Scene key="Products" component={Products} title="Products" />
              <Scene key="Login" component={Login} title="Login" />
              <Scene key="Addproduct" component={Addproduct} title="Add New Product" />
              </Scene>
          </Router>
        <FooterIcon />
      </View>
    );
  }
}
