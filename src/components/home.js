import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Home extends React.Component {
  render() {
    // const pic = {
    //   uri: 'https://static.wixstatic.com/media/dbda37_b4905467220149a392ae67875a217abf~mv2.png/v1/fill/w_381,h_132,al_c,usm_0.66_1.00_0.01/dbda37_b4905467220149a392ae67875a217abf~mv2.png'
    // };
    return (
      <View style={styles.container}>
        {/* <Image source={pic} style={{ width: 220, height: 96 }} /> */}
        <Text style={styles.goldenrod}>Cannabis Infused Luxury Skincare</Text>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goldenrod: {
    color: '#ae8520',
    fontWeight: 'bold',
    fontSize: 15
  }
});
