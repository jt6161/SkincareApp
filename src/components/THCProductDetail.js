import React from 'react';
import { View, Image } from 'react-native';
import { Text, Body, Card, CardItem, Left, Thumbnail } from 'native-base';

const THCProductDetail = ({ thcproduct }) => {
  const { name, img_url, description } = thcproduct;
  const {
    headerContentStyle,
    headerTextStyle,
    mainTextStyle,
    imageStyle
  } = styles;


  return (
     <Card>
      <CardItem bordered>
        <Left>
          <Thumbnail source={require('./420skincare_logo.png')} />
          <Body>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{name}</Text>
            </View>
          </Body>
        </Left>
      </CardItem>

      <CardItem>
        <Image
          style={imageStyle}
          source={{ uri: img_url }}
        />
      </CardItem>

      <CardItem bordered>
        <View>
          <Text style={mainTextStyle}>{description}</Text>
        </View>
      </CardItem>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ab8321',
    alignItems: 'center'
  },
  mainTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ab8321'
  },
  imageStyle: {
    height: 400,
    flex: 1,
    backgroundColor: 'black',
    width: null
  }
};
export default THCProductDetail;