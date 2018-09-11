import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Container, Content, List, ListItem, Text } from 'native-base';
import HeaderIcon from './HeaderIcon';

export default class Dispensary extends Component {
  render() {
    return (
      <Container>
        <HeaderIcon />
        <Content>
          <List>
            <ListItem>
              <Text style={styles.textStyle2}>To purchase
                420 Skincare products that are infused with
                THC please visit these state licensed dispensaries.
                You must have an AZ MMJ card to purchase from a dispensary.
                (Click for website)
              </Text>
            </ListItem>
            <ListItem itemDivider>
              <Text
                style={styles.textStyle}
              >
                Phoenix Dispensaries
              </Text>
            </ListItem>
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
                onPress={() => Linking.openURL('http://www.greenpharms.com/')}
              >
                THE GOOD DISPENSARY
              </Text>
            </ListItem>

            <ListItem itemDivider>
              <Text
                style={styles.textStyle}
              >
                Tucson Dispensaries
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
      </Content>
    </Container>

    );
  }
}
 const styles = {
   viewStyle: {
     backgroundColor: 'white',
     alignItems: 'center',
     height: 800,
     padding: 10,
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
     fontSize: 16,
     padding: 10,
     fontWeight: 'bold',
     color: '#ab8321'
   },
   mb15: {
     marginBottom: 20
   }
 };
