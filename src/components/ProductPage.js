import React, { Component } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Thumbnail, Container, Text, Card, CardItem, Icon, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';

const fourtwentylogo = require('./420skincare_logo.png');

export default class ProductPage extends Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
            <Image
              source={fourtwentylogo}
              style={{ width: 150,
              height: 80,
              alignSelf: 'center',
              justifyContent: 'space-between' }}
            />
        <Container>

              <Text style={styles.textStyle2}>To purchase
                420 Skincare CBD products please choose your options and quantities.
                For 10% off your first order use promo-code 420APP
              </Text>

              <Card>
                 <CardItem>
                   <Thumbnail source={fourtwentylogo} />
                   <Text
                   style={styles.textStyle2}
                   onPress={() => { Actions.ProductPage1(); }}
                   >CBD Bath Salts</Text>
                   <Right>
                     <Icon
                     name="arrow-forward"

                     />
                   </Right>
                  </CardItem>

                  <CardItem>
                    <Thumbnail source={fourtwentylogo} />
                    <Text
                    style={styles.textStyle2}
                    onPress={() => { Actions.ProductPage2(); }}
                    >CBD Bath Bomb Dust</Text>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                   </CardItem>

                   <CardItem>
                     <Thumbnail source={fourtwentylogo} />
                     <Text
                     style={styles.textStyle2}
                     onPress={() => { Actions.ProductPage3(); }}
                     >CBD Body Cream</Text>
                     <Right>
                       <Icon name="arrow-forward" />
                     </Right>
                    </CardItem>

                    <CardItem>
                      <Thumbnail source={fourtwentylogo} />
                      <Text
                      style={styles.textStyle2}
                      onPress={() => { Actions.ProductPage4(); }}
                      >CBD Body Butter</Text>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                     </CardItem>

                     <CardItem>
                       <Thumbnail source={fourtwentylogo} />
                       <Text
                       style={styles.textStyle2}
                       onPress={() => { Actions.ProductPage5(); }}
                       >CBD Soap</Text>
                       <Right>
                         <Icon name="arrow-forward" />
                       </Right>
                      </CardItem>

                      <CardItem>
                        <Thumbnail source={fourtwentylogo} />
                        <Text
                        style={styles.textStyle2}
                        onPress={() => { Actions.ProductPage6(); }}
                        >CBD Bath Bomb Twin Pack</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                       </CardItem>
                       </Card>
                        <Text style={styles.textStyle}>Purchase on merchant site.
                        </Text>
        </Container>
      </View>
    </ScrollView>
    );
  }
}
const styles = {
  viewStyle: {
   backgroundColor: 'white',
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
    fontSize: 16,
    padding: 5,
    fontWeight: 'bold',
    color: '#ab8321'
  }
};
