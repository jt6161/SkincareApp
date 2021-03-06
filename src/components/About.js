import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Body
} from 'native-base';

const fourtwentylogo = require('./420skincare_logo.png');

const medibleslogo = require('./420medibles_logo.png');

export default class About extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 1 }}>
            <CardItem bordered>
                <Body>
                  <Text style={styles.textStyle}>Marvina Thomas,
                  CEO / Founder of 420 Skincare & 420 Medibles,
                  Women Grow Director of Community Outreach</Text>
                </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Image
                  source={{ uri: 'https://static.wixstatic.com/media/7026a3_b4dd181ea98f4bfcb3bb4d0c4d857942~mv2.jpg' }}
                  style={{ height: 500, width: 350, flex: 1, alignSelf: 'center' }}
                />
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={styles.textStyle2}>
                  When Marvina Thomas started 420 Skincare she knew that she
                  wanted to build an operation that gave back
                  to a cause. Marvina started the “Buy & Give” program for
                  Start Living Inc Recovery Home for men and women who are
                  recovering from Opioid and Alcohol abuse. Through her
                  Buy & Give program, you can help save many individuals
                  from the terrible disease. As 420 Skincare grows, she would
                  like to accelerate the Buy & Give Program to new heights.
                  The program will allow 420 Skincare to help purchase MMJ cards
                  to assist many more men and women to get healthier. 50% of
                  our proceeds from this app go directly to the nonprofit
                  Start Living Inc Recovery Home. 420 Skincare products will
                  make you feel good inside and out!
                  Coming Soon 420 Medibles!
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Image
                  source={fourtwentylogo}
                  style={{ width: 150, height: 80, paddingLeft: 30 }}
                />
              </Left>

              <Right>
                <Image
                  source={medibleslogo}
                  style={{ width: 150, height: 80, paddingRight: 30 }}
                />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = {
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
