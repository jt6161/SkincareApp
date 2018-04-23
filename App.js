import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import FooterIcon from './src/components/FooterIcon';
import Home from './src/components/Home';
import About from './src/components/About';
import PageOne from './src/components/pageOne';
import PageTwo from './src/components/pageTwo';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 2 }}>
          <Router hideNavBar="true">
                  <Scene key="root">
                    <Scene key="Home" component={Home} title="Products" initial />
                    <Scene key="About" component={About} title="About" />
                    <Scene key="pageOne" title="PageOne" component={PageOne} />
                    <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
                  </Scene>
                </Router>
                <FooterIcon />
      </View>
    );
  }
}
