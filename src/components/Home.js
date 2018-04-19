import React from 'react';
import { Text, View, ScrollView } from 'react-native';
// import ProductList from './ProductList';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Cannabis Infused Luxury Skincare</Text>
        {/* <ProductList /> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ab8321'
  }
};
