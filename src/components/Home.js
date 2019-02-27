import React, { Component } from 'react';
import { ScrollView, View, Image, Linking } from 'react-native';
import { Text, Button, Row, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

const fourtwentylogo = require('./420skincare_logo.png');

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>

          <Image
            source={fourtwentylogo}
            style={{ width: 200, height: 80, alignSelf: 'center' }}
          />
          <Text style={styles.textStyle}>Cannabis Infused Luxury Skincare
          </Text>

          <Image
            source={{ uri: 'https://static.wixstatic.com/media/7026a3_7d9b823a99b047549592062a85112431~mv2_d_3024_4032_s_4_2.jpeg' }}
            style={{ width: 310, height: 180, alignSelf: 'center' }}
          />

          <Text style={styles.textStyle2}>
            From Infused Body Butter to CBD Soaps,
            we specialize in Natural, Organic, Hand-Crafted
            Skincare for all Skin Types. Our soothing all natural
            ingredients can improve several skin conditions 50% of sales
            go to the nonprofit Start Living Inc Recovery Home.
            420 Skincare products will make you feel good inside and out!
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

          <Row>
          <Button
          transparent
          onPress={() => Linking.openURL('https://www.instagram.com/420skincare')}
          >
           <Icon name="logo-instagram" style={{ color: '#ab8321' }} />
          </Button>
          <Button
          transparent
          onPress={() => Linking.openURL('http://www.facebook.com/420Skincare')}
          >
           <Icon name="logo-facebook" style={{ color: '#ab8321' }} />
          </Button>
          <Button
          transparent
          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=ldQGRS8s1Zg')}
          >
           <Icon name="logo-youtube" style={{ color: '#ab8321' }} />
          </Button>
          </Row>
        </View>
      </ScrollView>
    );
  }
}
 const styles = {
   viewStyle: {
     backgroundColor: 'white',
     alignItems: 'center',
     height: 570,
     padding: 10,
     elevation: 2,
     position: 'relative'
   },
   textStyle: {
     fontSize: 16,
     padding: 5,
     fontWeight: 'bold',
     fontStyle: 'italic',
     color: '#ab8321'
   },
   textStyle2: {
     fontSize: 14,
     padding: 10,
     fontStyle: 'italic',
     color: '#ab8321'
   },
   mb15: {
     marginBottom: 10
   }
 };
