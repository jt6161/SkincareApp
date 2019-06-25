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
            source={{ uri: 'https://static.wixstatic.com/media/7026a3_8fd8472039e24fa389ade7d667a4faa9~mv2.jpg' }}
            style={{ width: 300, height: 300, alignSelf: 'center' }}
          />
          <Text
              style={styles.textStyle2}
              onPress={() => Linking.openURL('https://www.directcannabisnetwork.com/entrepreneur-week-marvina-thomas/')}
          >
            Entrepreneur of the Week: Marvina Thomas of 420 Skincare - Direct Cannabis Network
          </Text>

          <Image
            source={{ uri: 'https://dopemagazine.com/wp-content/uploads/2018/11/marvina-thomas.jpg' }}
            style={{ width: 300, height: 194, alignSelf: 'center' }}
          />
          <Text
              style={styles.textStyle2}
              onPress={() => Linking.openURL('https://dopemagazine.com/marvina-thomas-420-skincare/?fbclid=IwAR3pL_CfrPjCT7qf25M7D4CBinZa1NuwRjXwodrtq_6STCMwcewx8gbKDus')}
          >
            Marvina Thomas: Nurse By Trade Still Healing Others
            - Dope Magazine
          </Text>

          <Image
            source={{ uri: 'https://static.wixstatic.com/media/7026a3_8019b0c29a4841c3a5d27f869c2c9441~mv2.jpg' }}
            style={{ width: 315, height: 204, alignSelf: 'center' }}
          />
          <Text
              style={styles.textStyle2}
              onPress={() => Linking.openURL('https://www.forbes.com/sites/julieweed/2019/05/10/cannabis-and-cbd-gifts-from-these-moms-to-yours-for-mothers-day/#2177ee5e2654')}
          >
            Cannabis And CBD Gifts From These Moms To Yours, For Mothers Day - Forbes
          </Text>

          <Image
            source={{ uri: 'https://assets.entrepreneur.com/content/3x2/2000/20180802214533-phpB6e3Vj-crop.jpeg' }}
            style={{ width: 315, height: 230, alignSelf: 'center' }}
          />
          <Text
            style={styles.textStyle2}
            onPress={() => Linking.openURL('http://entm.ag/h2p')}
          >
            She Wants to Change the Face of the Industry - Green Entrepreneur
          </Text>

          <Image
            source={{ uri: 'https://static.wixstatic.com/media/7026a3_de264c58240141cf96ea104881f44377~mv2.png' }}
            style={{ width: 315, height: 230, alignSelf: 'center' }}
          />
          <Text
            style={styles.textStyle2}
              onPress={() => Linking.openURL('https://www.phoenixnewtimes.com/news/no-slack-in-success-black-ganjapreneur-marvina-thomas-sets-pace-in-cannabis-industry-10502514')}
          >
            No Slack in Success:
            Black Ganjapreneur Marvina Thomas Sets Example in Industry - Phoenix New Times
          </Text>

          <Image
            source={{ uri: 'https://static.wixstatic.com/media/7026a3_de264c58240141cf96ea104881f44377~mv2.png' }}
            style={{ width: 315, height: 230, alignSelf: 'center' }}
          />
          <Text
            style={styles.textStyle2}
              onPress={() => Linking.openURL('https://www.phoenixnewtimes.com/news/no-slack-in-success-black-ganjapreneur-marvina-thomas-sets-pace-in-cannabis-industry-10502514')}
          >
            No Slack in Success:
            Black Ganjapreneur Marvina Thomas Sets Example in Industry - Phoenix New Times
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
     fontSize: 14,
     padding: 10,
     fontWeight: 'bold',
     color: '#ab8321'
   },
   textStyle2: {
     fontSize: 12,
     padding: 10,
     fontWeight: 'bold',
     color: '#ab8321'
   },
   mb15: {
     marginBottom: 20
   }
 };
