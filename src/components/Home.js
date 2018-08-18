import React, { Component } from 'react';
import { ScrollView, View, Image, Linking } from 'react-native';
import { Text, Button, Row } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>

          <Image
            source={require('./420skincare_logo.png')}
            style={{ width: 200, height: 80, alignSelf: 'center' }}
          />
          <Text style={styles.textStyle}>Cannabis Infused Luxury Skincare
          </Text>

          <Image
            source={{ uri: 'https://static.wixstatic.com/media/7026a3_0d13522b5a0b42559d6d183bc8b44eb3~mv2.jpg' }}
            style={{ width: 315, height: 180, alignSelf: 'center' }}
          />
          <Text
              style={{ color: '#ab8321', fontSize: 13, padding: 3, fontWeight: 'bold' }}
              onPress={() => Linking.openURL('http://www.420-Skincare.com')}
          >
            420-Skincare.com
          </Text>
          <Text style={styles.textStyle2}>
            From Infused Body Butter to CBD Soaps,
            we specialize in Natural, Organic, Hand-Crafted
            Skincare for all Skin Types. Our soothing all natural
            ingredients can improve several skin conditions. 50% of
            our proceeds from this app go directly to the nonprofit
            Start Living Recovery Home. 420 Skincare products will
            make you feel good inside and out!
          </Text>

          <Row>
            <Button
              block small success
              style={styles.mb15}
              onPress={() => { Actions.Products(); }}
            >
              <Text>420 Skincare Products</Text>
            </Button>
          </Row>
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
     fontSize: 15,
     padding: 10,
     fontWeight: 'bold',
     color: '#ab8321'
   },
   mb15: {
     marginBottom: 20
   }
 };
