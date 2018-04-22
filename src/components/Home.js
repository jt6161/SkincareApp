import React from 'react';
import { ScrollView } from 'react-native';
import ProductList from './ProductList';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView>
      <ProductList />
    </ScrollView>
  );
  }
}
