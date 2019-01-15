import React, { Component } from 'react';
import { Image, Linking, ScrollView, View } from 'react-native';
import { List, ListItem, Row, Text } from 'native-base';

const fourtwentylogo = require('./420skincare_logo.png');

export default class ProductPage extends Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <Row>
            <Image
              source={fourtwentylogo}
              style={{ width: 150,
              height: 80,
              alignSelf: 'center',
              justifyContent: 'space-between' }}
            />
            </Row>

          <List>
              <Text style={styles.textStyle2}>To purchase
                420 Skincare products choose your options and quantities.
                Use Promo code 420APP for 10% off your first order.
              </Text>

            <ListItem>
              <Text
                style={styles.textStyle2}
                onPress={() => Linking.openURL('https://naturesmedicines.com/')}
              >
                NATURE'S MEDICINES
              </Text>
            </ListItem>
            <ListItem>
              <Text
              style={styles.textStyle2}
              onPress={() => Linking.openURL('https://midtownroots.com/')}
              >
              MIDTOWN ROOTS
              </Text>
            </ListItem>

            <ListItem>
              <Text
                style={styles.textStyle2}
                onPress={() => Linking.openURL('http://urbangreenhouse.com')}
              >
                URBAN GREENHOUSE
              </Text>
            </ListItem>

            <ListItem>
              <Text
                style={styles.textStyle2}
                onPress={() => Linking.openURL('http://metromeds.com')}
              >
                METRO MEDS
              </Text>
            </ListItem>

            <ListItem>
              <Text
                style={styles.textStyle2}
                onPress={() => Linking.openURL('http://www.arizonanaturalremedies.com/')}
              >
                ARIZONA NATURAL REMEDIES
              </Text>
            </ListItem>

            <ListItem>
              <Text
                style={styles.textStyle2}
                onPress={() => Linking.openURL('https://nirvanacenter.com/')}
              >
                NIRVANA CENTER
              </Text>
            </ListItem>

            <ListItem>
              <Text
                style={styles.textStyle2}
                onPress={() => Linking.openURL('https://www.harvestofaz.com/')}
              >
                HARVEST OF ARIZONA
              </Text>
            </ListItem>

            <ListItem>
              <Text
                style={styles.textStyle2}
                onPress={() => Linking.openURL('https://azreleaf.com/')}
              >
                PONDEROSA RELEAF
              </Text>
            </ListItem>

            <ListItem>
              <Text
                style={styles.textStyle2}
                onPress={() => Linking.openURL('http://www.greenpharms.com/')}
              >
                GREENPHARMS
              </Text>
            </ListItem>

            <ListItem>
              <Text
                style={styles.textStyle2}
                onPress={() => Linking.openURL('http://thegooddispensary.com/')}
              >
                THE GOOD DISPENSARY
              </Text>
            </ListItem>

            <ListItem>
              <Text
                style={styles.textStyle2}
                onPress={() => Linking.openURL('https://botanica.us/')}
              >
                BOTANICA
              </Text>
            </ListItem>

            <ListItem>
              <Text
                style={styles.textStyle2}
                onPress={() => Linking.openURL('http://purple-med.com/')}
              >
                PURPLE MED
              </Text>
            </ListItem>
        </List>
      </View>
    </ScrollView>
    );
  }
}
const styles = {
  viewStyle: {
   backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    elevation: 2
  },
  textStyle: {
    fontSize: 12,
    padding: 5,
    fontWeight: 'bold',
    color: '#ab8321'
  },
  textStyle2: {
    fontSize: 15,
    padding: 5,
    fontWeight: 'bold',
    color: '#ab8321'
  }
};
