import React, { Component } from 'react';
import { ScrollView, View, Image, Linking } from 'react-native';
import { Text, Button, Row } from 'native-base';
// import { Actions } from 'react-native-router-flux';

export default class AboutBU extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <Image
            source={require('./420skincare_logo.png')}
            style={{ width: 150, height: 60, padding: 10 }}
          />
          <Image
            source={{ uri: 'https://static.wixstatic.com/media/7026a3_b4dd181ea98f4bfcb3bb4d0c4d857942~mv2.jpg' }}
            style={{ width: 250, height: 350, margin: 5 }}
          />

          <Text style={styles.textStyle2}>
            Marvina Thomas, CEO and founder of 420 Skincare,
            leader of Women Grow Phoenix. When she started 420 Skincare she
            knew that she wanted to build an operation that gave back
            to a cause. Marvina started the “Buy & Give” program for
            Start Living Recovery Home for men and women who are
            recovering from Opioids and Alcohol abuse. Through her
            Buy & Give program, you can help save many individuals
            from the terrible disease. As 420 Skincare grows, she would
            like to accelerate the Buy & Give Program to new heights.
            The program will allow 420 Skincare to help purchase MMJ cards
            to help many more men and women to get healthier.
            For more information please visit our website.
          </Text>
          <Text
              style={{ color: '#ab8321', fontSize: 13, fontWeight: 'bold' }}
              onPress={() => Linking.openURL('http://www.420-Skincare.com')}
          >
            420-Skincare.com
          </Text>
        </View>
      </ScrollView>
    );
  }
}
 const styles = {
   viewStyle: {
     backgroundColor: 'black',
     alignItems: 'center',
     height: 800,
     padding: 10,
     elevation: 2,
     position: 'relative'
   },
   textStyle: {
     fontSize: 17,
     padding: 10,
     fontWeight: 'bold',
     color: '#ab8321'
   },
   textStyle2: {
     fontSize: 14,
     padding: 10,
     fontWeight: 'bold',
     color: '#ab8321'
   }
 };
