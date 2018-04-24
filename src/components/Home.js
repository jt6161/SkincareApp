import React from 'react';
import { ScrollView, View, Image, Linking } from 'react-native';
import { Text, Button, Row } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
        <Image
          source={{ uri: 'https://static.wixstatic.com/media/dbda37_b4905467220149a392ae67875a217abf~mv2.png/v1/fill/w_381,h_132,al_c,usm_0.66_1.00_0.01/dbda37_b4905467220149a392ae67875a217abf~mv2.png' }}
          style={{ width: 160, height: 60, padding: 10 }}
        />
          <Text style={styles.textStyle}>Cannabis Infused Luxury Skincare</Text>
          <Text style={styles.textStyle2}>
            From Cannabis Infused Body Butter to CBD Soaps,
            we Specialize in Natural & Organic, Hand-Crafted
            Skincare for all Skin Types.
            420 Skincare products will make you feel good inside & out!
            Our soothing all-natural ingredients can improve several
            skin conditions. 50 percent of our proceeds go directly
            back into Start Living Recovery Home. For more information
            on 420 Skincare please visit our website.
            </Text>
            <Text
              style={{ color: '#ab8321', fontSize: 16, fontWeight: 'bold'
             }}
              onPress={() => Linking.openURL('http://www.420-Skincare.com')}
            >
              420-Skincare.com
            </Text>

            <Image
              source={{ uri: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29793869_360376004459988_2236546031175073792_n.jpg?_nc_cat=0&oh=d5a6574c8dfce19fc0f3a6a90e49412f&oe=5B68B10D' }}
              style={{ width: 200, height: 130, margin: 15 }}
            />
            <Row>
            <Button
              Button small rounded success
              style={{ margin: 5 }}
              onPress={() => { Actions.Products(); }}
            >
                 <Text>Browse Products</Text>
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
   }
 };
