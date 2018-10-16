import React from 'react';
import { View, StyleSheet } from 'react-native';
import FooterIcon from './src/components/FooterIcon';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
        <FooterIcon />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
