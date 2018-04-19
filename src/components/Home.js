import React from 'react';
import { Text, View, ScrollView } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Products Sweet Home</Text>
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
    height: 1000,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white'
  }
};
