import React from 'react';
import { Text, View, ScrollView } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ width: 100, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        <Text style={styles.textStyle}>Home</Text>
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
    height: 100,
    paddingTop: 5,
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
