import React from 'react';
import { ScrollView, View } from 'react-native';
import ProductList from './ProductList';

export default class Products extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <ProductList />
        </ScrollView>
      </View>
     );
  }
}
