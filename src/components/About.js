import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={require('./420skincare_logo.png')} />
                <Body>
                  <Text style={styles.textStyle}>Marvina Thomas,
                  CEO and founder of 420 Skincare,
                  Leader of Women Grow Phoenix Chapter</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Image
                  source={{ uri: 'https://static.wixstatic.com/media/7026a3_b4dd181ea98f4bfcb3bb4d0c4d857942~mv2.jpg' }}
                  style={{ height: 490, width: 350, flex: 1, alignSelf: 'center' }}
                />
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={styles.textStyle2}>
                  When Marvina Thomas started 420 Skincare she knew that she
                  wanted to build an operation that gave back
                  to a cause. Marvina started the “Buy & Give” program for
                  Start Living Recovery Home for men and women who are
                  recovering from Opioid and Alcohol abuse. Through her
                  Buy & Give program, you can help save many individuals
                  from the terrible disease. As 420 Skincare grows, she would
                  like to accelerate the Buy & Give Program to new heights.
                  The program will allow 420 Skincare to help purchase MMJ cards
                  to assist many more men and women to get healthier.
                </Text>
                <Image
                  source={require('./420skincare_logo.png')}
                  style={{ width: 200, height: 150, alignSelf: 'center' }}
                />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 17,
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
