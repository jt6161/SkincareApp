import React from 'react';
import { ScrollView, View } from 'react-native';
import TestimonialList from './TestimonialList';

export default class TestimonialScroll extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <TestimonialList />
        </ScrollView>
      </View>
     );
  }
}
