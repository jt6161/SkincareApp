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
          <Text style={styles.textStyle}>
            Marvina Thomas and 420 Skincare have been featured in
            many different articles. Click article title to view.
          </Text>
          
          <Image
            source={{ uri: 'https://assets.entrepreneur.com/content/3x2/2000/20180802214533-phpB6e3Vj-crop.jpeg' }}
            style={{ width: 315, height: 315, alignSelf: 'center' }}
          />
          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('http://entm.ag/h2p')}
          >
            She Wants to Change the Face of the Industry - Green Entrepreneur
          </Text>
          <Image
            source={{ uri: 'https://images1.phoenixnewtimes.com/imager/u/745xauto/10503675/marvina3-2.jpg' }}
            style={{ width: 315, height: 315, alignSelf: 'center' }}
          />
          <Text
            style={styles.textStyle2}
              onPress={() => Linking.openURL('https://www.phoenixnewtimes.com/news/no-slack-in-success-black-ganjapreneur-marvina-thomas-sets-pace-in-cannabis-industry-10502514')}
          >
            No Slack in Success:
            Black Ganjapreneur Marvina Thomas Sets Example in Industry - Phoenix New Times
          </Text>

          <Image
            source={{ uri: 'https://www.directcannabisnetwork.com/wp-content/uploads/2017/01/DCN-web-logo-272.png' }}
            style={{ width: 315, height: 180, alignSelf: 'center' }}
          />
          <Text
              style={styles.textStyle2}
              onPress={() => Linking.openURL('https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.directcannabisnetwork.com%2Fentrepreneur-week-marvina-thomas%2F&h=AT09DIf3IfKg9YJwAgI_8vGtTLoDWxCO4Oe19IE6hiEj5k9bW41JKL4xjufmnpmHAOgyfg93RM8yQ1oWzsE7XB7U2TlnqidhtfGx0yX8Kj72_SE9ah8nWNwMQb1UHgllihpddz8F7QUHwOQUpna9S0LL9xJf5UxxIlLlPWPhQV6PP9Ktaz8I8IG3Mc3FMYa3G6NyJ6qbfwd9y84ZHq6KKcoXTFLwrn6YBE6085UnD6RTYGq3riKgo2RnAMzAZrS0obiykkSVVpBcKXUuWp9aWS2Pttl_w826d-nfSx8-50iBjaoD5ns8TehXE_-OJyStgGOa1KptC7mZVbwY4FVe4VOAOUSQeMwiM9bBZjwMLCGJK7EFrd5E-sjOEMJDlP9HagKjslgLAb3hLBF-aakn1Rg36Seltr16')}
          >
            Entrepreneur of the Week: Marvina Thomas of 420 Skincare - Direct Cannabis Network
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
     fontSize: 14,
     padding: 10,
     fontWeight: 'bold',
     color: '#ab8321'
   },
   mb15: {
     marginBottom: 20
   }
 };
