import React, { Component } from 'react';
import { ScrollView, View, Image, Linking } from 'react-native';
import { Text } from 'native-base';
// import { Actions } from 'react-native-router-flux';

const fourtwentylogo = require('./420skincare_logo.png');

export default class Press extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>

          <Image
            source={fourtwentylogo}
            style={{ width: 200, height: 80, alignSelf: 'center' }}
          />
          <Text style={styles.textStyle2}>
            420 Skincare has been featured in many different articles, click to view.
          </Text>
          <Image
            source={{ uri: 'https://images1.phoenixnewtimes.com/imager/u/745xauto/10503675/marvina3-2.jpg' }}
            style={{ width: 315, height: 315, alignSelf: 'center' }}
            onPress={() => Linking.openURL('https://www.phoenixnewtimes.com/news/no-slack-in-success-black-ganjapreneur-marvina-thomas-sets-pace-in-cannabis-industry-10502514')}
          />
          <Text
              style={{ color: '#ab8321', fontSize: 13, padding: 3, fontWeight: 'bold' }}
              onPress={() => Linking.openURL('https://www.phoenixnewtimes.com/news/no-slack-in-success-black-ganjapreneur-marvina-thomas-sets-pace-in-cannabis-industry-10502514')}
          >
            No Slack in Success - Phoenix New Times
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
   },
   mb15: {
     marginBottom: 20
   }
 };
