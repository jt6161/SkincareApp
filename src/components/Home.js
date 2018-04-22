import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import ProductList from './ProductList';

export default class Home extends React.Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Cannabis Infused Luxury Skincare</Text>
          <Text style={styles.textStyle2}>
            420 Skincare products will make you feel good inside & out!
            Our soothing all-natural ingredients can improve several
            skin conditions. 50% of our proceeds go directly back into
            Start Living Recovery Home.</Text>
        </View>
      <ProductList />
    </ScrollView>
  );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ab8321'
  },
  textStyle2: {
    fontSize: 12,
    padding: 10,
    fontWeight: 'bold',
    color: '#ab8321'
  }
};
