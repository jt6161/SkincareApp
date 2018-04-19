import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import ProductList from './ProductList';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Home</Text>
        <ProductList />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: 'white',
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
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black'
  }
};
