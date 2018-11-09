import React from 'react';
import { ScrollView, View } from 'react-native';
import MedibleList from './MedibleList';

export default class THCProducts extends React.Component {
  render() {
    return (
      <View>
          <ScrollView>
          <MedibleList />
         </ScrollView>
      </View>
     );
  }
}
