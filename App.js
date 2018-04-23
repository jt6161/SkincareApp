import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import FooterIcon from './src/components/FooterIcon';
import Products from './src/components/Products';
import About from './src/components/About';
import Orders from './src/components/Orders';
import PageTwo from './src/components/pageTwo';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Router hideNavBar="true">
              <Scene key="root">
                <Scene key="About" component={About} title="420 Skincare" initial />
                <Scene key="Products" component={Products} title="Products" />
                <Scene key="Orders" component={Orders} title="Orders" />
                <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
              </Scene>
          </Router>
        <FooterIcon />
      </View>
    );
  }
}
