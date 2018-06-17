import React from 'react';
import { ScrollView, View, DeckSwiper } from 'react-native';
import THCProductList from './THCProductList';

export default class THCProducts extends React.Component {
  render() {
    return (
      <View>
          <ScrollView>
          <THCProductList />
         </ScrollView>      
      </View>
     );
  }
}
