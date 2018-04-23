import React from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Row } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class About extends React.Component {
  render() {
    return (
        <View style={styles.viewStyle}>
        <Image
          source={{ uri: 'https://static.wixstatic.com/media/dbda37_b4905467220149a392ae67875a217abf~mv2.png/v1/fill/w_381,h_132,al_c,usm_0.66_1.00_0.01/dbda37_b4905467220149a392ae67875a217abf~mv2.png' }}
          style={{ width: 150, height: 60 }}
        />
          <Text style={styles.textStyle}>Cannabis Infused Luxury Skincare</Text>
          <Text style={styles.textStyle2}>
            420 Skincare products will make you feel good inside & out!
            Our soothing all-natural ingredients can improve several
            skin conditions. 50 percent of our proceeds go directly back into
            Start Living Recovery Home.</Text>
            <Row>
          <Button
            Button small rounded info
            style={{ margin: 10 }}
            onPress={() => { Actions.pageOne(); }}
          >
               <Text>Page 1</Text>
           </Button>
           <Button
             Button small rounded info
             style={{ margin: 10 }}
             onPress={() => { Actions.pageTwo(); }}
           >
                <Text>Page 2</Text>
            </Button>
            <Button
              Button small rounded success
              style={{ margin: 10 }}
              onPress={() => { Actions.Home(); }}
            >
                 <Text>Home</Text>
             </Button>
             <Button
               Button small rounded warning
               style={{ margin: 10 }}
               onPress={() => { Actions.About(); }}
             >
                  <Text>About</Text>
              </Button>
              </Row>
        </View>
);
}
}
 const styles = {
   viewStyle: {
     backgroundColor: 'black',
     // justifyContent: 'center',
     alignItems: 'center',
     height: 800,
     padding: 10,
     elevation: 2,
     position: 'relative'
   },
   textStyle: {
     fontSize: 16,
     padding: 5,
     fontWeight: 'bold',
     color: '#ab8321'
   },
   textStyle2: {
     fontSize: 14,
     padding: 5,
     fontWeight: 'bold',
     color: '#ab8321'
   }
 };
