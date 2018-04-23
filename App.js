import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import FooterIcon from './src/components/FooterIcon';
import Products from './src/components/Products';
import About from './src/components/About';
import PageOne from './src/components/pageOne';
import PageTwo from './src/components/pageTwo';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Router hideNavBar="true">
              <Scene key="root">
                <Scene key="About" component={About} title="420 Skincare" initial />
                <Scene key="Products" component={Products} title="Products" />
                <Scene key="pageOne" component={PageOne} title="PageOne" />
                <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
              </Scene>
          </Router>
        <FooterIcon />
      </View>
    );
  }
}
