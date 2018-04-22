import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import HeaderIcon from './src/components/HeaderIcon';
import Home from './src/components/Home';
import About from './src/components/About';
import PageOne from './src/components/pageOne';
import PageTwo from './src/components/pageTwo';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 2 }}>
        <HeaderIcon />
          <Router hideNavBar="true">
                  <Scene key="root">
                    <Scene key="Home" component={Home} />
                    <Scene key="About" component={About} />
                    <Scene key="pageOne" component={PageOne} initial />
                    <Scene key="pageTwo" component={PageTwo} />
                  </Scene>
                </Router>
      </View>
    );
  }
}
