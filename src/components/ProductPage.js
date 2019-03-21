import React, { Component } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Left,
  Body, Right, Button } from 'native-base';
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
              <Content>
                  <Text
                  style={styles.textStyle2}
                  >
                  To purchase 420 Skincare CBD products please choose
                  your options and quantities. For 10% off your first order use promo-code 420APP
                  </Text>

              <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square source={fourtwentylogo} />
                  </Left>
                  <Body>
                   <Text
                   style={styles.textStyle2}
                   >
                   CBD Bath Salts</Text>
                  </Body>
                  <Right>
                   <Button
                   transparent
                   onPress={() => { Actions.ProductPage1(); }}
                   >
                   <Text>Purchase</Text>
                   </Button>
                  </Right>
                </ListItem>

                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square source={fourtwentylogo} />
                  </Left>
                  <Body>
                   <Text
                   style={styles.textStyle2}
                   >
                    CBD Bath Bomb Dust</Text>
                  </Body>
                  <Right>
                   <Button
                   transparent
                   onPress={() => { Actions.ProductPage2(); }}
                   >
                   <Text>Purchase</Text>
                   </Button>
                  </Right>
                </ListItem>

                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square source={fourtwentylogo} />
                  </Left>
                  <Body>
                    <Text
                    style={styles.textStyle2}
                    >
                    CBD Body Cream</Text>
                  </Body>
                  <Right>
                   <Button
                   transparent
                   onPress={() => { Actions.ProductPage3(); }}
                   >
                   <Text>Purchase</Text>
                   </Button>
                   </Right>
                </ListItem>

                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square source={fourtwentylogo} />
                  </Left>
                  <Body>
                    <Text
                    style={styles.textStyle2}
                    >
                    CBD Body Butter</Text>
                  </Body>
                  <Right>
                    <Button
                    transparent
                    onPress={() => { Actions.ProductPage4(); }}
                    >
                    <Text>Purchase</Text>
                    </Button>
                  </Right>
                </ListItem>

                <ListItem thumbnail>
                    <Left>
                      <Thumbnail square source={fourtwentylogo} />
                    </Left>
                    <Body>
                      <Text
                      style={styles.textStyle2}
                      >
                      CBD Soap</Text>
                    </Body>
                    <Right>
                      <Button
                      transparent
                      onPress={() => { Actions.ProductPage5(); }}
                      >
                      <Text>Purchase</Text>
                      </Button>
                    </Right>
                </ListItem>

                <ListItem thumbnail>
                    <Left>
                      <Thumbnail square source={fourtwentylogo} />
                    </Left>
                    <Body>
                      <Text
                      style={styles.textStyle2}
                      >
                      CBD Bath Bomb Twin Pack</Text>
                      </Body>
                      <Right>
                        <Button
                        transparent
                        onPress={() => { Actions.ProductPage6(); }}
                        >
                        <Text>Purchase</Text>
                        </Button>
                      </Right>
                </ListItem>
                
              </List>
                  <Text
                  style={styles.textStyle}
                  >
                  Purchase on merchant site.</Text>
              </Content>
          </Container>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: 'white',
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
