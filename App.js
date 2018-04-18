import React from 'react';
import { View } from 'react-native';
import Home from './src/components/Home';
import Header from './src/components/Header';
// import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Cannabis Infused Luxury Skincare'} />
        <Home />
        {/* <AlbumList /> */}
      </View>
    );
  }
}
