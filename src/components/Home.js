import React, { Component } from 'react';
import { ScrollView, View, Image, Linking } from 'react-native';
import { Text, Button, Row } from 'native-base';
import { Actions } from 'react-native-router-flux';

const fourtwentylogo = require('./420skincare_logo.png');

const medibleslogo = require('./420medibles_logo.png');

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
            <Image
              source={fourtwentylogo}
              style={{ width: 170, height: 80, alignSelf: 'center' }}
            />
          <Image
            source={{ uri: 'https://static.wixstatic.com/media/7026a3_0d13522b5a0b42559d6d183bc8b44eb3~mv2.jpg' }}
            style={{ width: 310, height: 180, alignSelf: 'center' }}
          />
          <Text
              style={styles.copyright}
              onPress={() => Linking.openURL('http://www.420-Skincare.com')}
          >
            420-Skincare.com
          </Text>

          <Text style={styles.textStyle2}>
            Cannabis Infused Luxury Skincare - From Infused Body Butter to CBD
            Soaps, we specialize in Natural, Organic, Hand-Crafted
            Skincare for all Skin Types.
          </Text>

          {/* <Row>
            <Button
              block small success
              style={styles.mb15}
              onPress={() => { Actions.Products(); }}
            >
              <Text>420 Skincare Products</Text>
            </Button>
            </Row> */}

            <Image
                source={medibleslogo}
                style={{ width: 170, height: 80, alignSelf: 'center' }}
            />
              <Text style={styles.textStyle2}>
                420 Medibles - From Brownies to Gummys we have the biggest
                and best tasty treats for you. Our delicious ingredients
                and generous sizes will make you fall in love with
                420 Medibles. Only available in the dispensary!
              </Text>
              <Text
                style={styles.copyright}
              >
            Copyright © 2018 </Text>
            <Text
              style={styles.copyright}
            >
          420 Skincare and 420 Medibles.
          All Rights Reserved.</Text>
        </View>
      </ScrollView>
    );
  }
}
 const styles = {
   viewStyle: {
     backgroundColor: 'black',
     alignItems: 'center',
     height: 650,
     padding: 5,
     elevation: 2,
     position: 'relative'
   },
   textStyle: {
     fontSize: 15,
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
   copyright: {
     fontSize: 13,
     padding: 5,
     fontWeight: 'bold',
     color: '#ab8321',
     alignSelf: 'center'
   },
   mb15: {
     marginBottom: 20,
     padding: 10
   }
 };
