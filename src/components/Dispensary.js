import React, { Component } from 'react';
import { ScrollView, View, Image, Linking } from 'react-native';
import { Text, Button, Row } from 'native-base';
// import { Actions } from 'react-native-router-flux';

export default class Dispensary extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <Image
            source={require('./420skincare_logo.png')}
            style={{ width: 200, height: 80, alignSelf: 'center' }}
          />
          <Text style={styles.textStyle}>To purchase
            420 Skincare products that are infused with
            THC please visit these dispensaries.
            You must have an AZ MMJ card to purchase.
            (Click for website)
          </Text>

          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('https://naturesmedicines.com/')}
          >
            NATURE'S MEDICINES
          </Text>

          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('https://midtownroots.com/')}
          >
            MIDTOWN ROOTS
          </Text>

          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('http://urbangreenhouse.com')}
          >
            URBAN GREENHOUSE
          </Text>

          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('http://metromeds.com')}
          >
            METRO MEDS
          </Text>

          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('http://www.arizonanaturalremedies.com/')}
          >
            ARIZONA NATURAL REMEDIES
          </Text>

          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('https://nirvanacenter.com/')}
          >
            NIRVANA CENTER
          </Text>

          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('https://www.harvestofaz.com/')}
          >
            HARVEST OF ARIONA
          </Text>

          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('https://azreleaf.com/')}
          >
            PONDEROSA RELEAF
          </Text>

          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('http://www.greenpharms.com/')}
          >
            GREENPHARMS
          </Text>

          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('http://www.greenpharms.com/')}
          >
            THE GOOD DISPENSARY
          </Text>

          <Text
            style={styles.textStyle}
          >
              Tucson Dispensares
          </Text>
              
          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('https://botanica.us/')}
          >
            BOTANICA
          </Text>

          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('http://purple-med.com/')}
          >
            PURPLE MED
          </Text>

          <Text
              style={{ color: '#ab8321', fontSize: 13, padding: 3, fontWeight: 'bold' }}
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
     fontSize: 16,
     padding: 10,
     fontWeight: 'bold',
     color: '#ab8321'
   },
   textStyle2: {
     fontSize: 18,
     padding: 10,
     fontWeight: 'bold',
     color: '#ab8321'
   },
   mb15: {
     marginBottom: 20
   }
 };
