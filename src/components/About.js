import React, { Component } from 'react';
import { ScrollView, View, Image, Linking } from 'react-native';
import { Text, Button, Row } from 'native-base';
// import { Actions } from 'react-native-router-flux';

export default class About extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <Image
            source={require('./420skincare_logo.png')}
            style={{ width: 160, height: 60, padding: 10 }}
          />
          <Image
            source={{ uri: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/31225138_10156315166967236_1786995132902408192_n.jpg?_nc_cat=0&oh=2adf63a7482c0614dc4a84993d2f03eb&oe=5B50D150' }}
            style={{ width: 315, height: 180, margin: 5 }}
          />

          <Text style={styles.textStyle2}>
            Marvina CEO and founder of 420 Skincare
            For more information please visit our website.
          </Text>
          <Text
              style={{ color: '#ab8321', fontSize: 12, fontWeight: 'bold' }}
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
     height: 600,
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
