import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import ProductList from './ProductList';

export default class Products extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Image
            source={require('./420skincare_logo.png')}
            style={{ width: 100, height: 50, alignSelf: 'center' }}
          />
          <ProductList />
          <Image
            source={require('./420skincare_logo.png')}
            style={{ width: 100, height: 50, alignSelf: 'center' }}
          />
        </ScrollView>
      </View>
     );
  }
}
