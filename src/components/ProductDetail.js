import React from 'react';
import { View, Image } from 'react-native';
import {
  Text,
  Body,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Button
} from 'native-base';
import { Actions } from 'react-native-router-flux';

const fourtwentylogo = require('./420skincare_logo.png');

const ProductDetail = ({ product }) => {
  const { name, img_url, description, price, url } = product;
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
          <Thumbnail source={fourtwentylogo} />
          <Body>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{name}</Text>
            </View>
          </Body>
        </Left>
      </CardItem>

      <CardItem bordered>
        <Image
          style={imageStyle}
          source={{ uri: img_url }}
        />
      </CardItem>

      <CardItem>
        <View>
          <Text style={mainTextStyle}>{description}</Text>
          <Text style={headerTextStyle}>Price: ${price}</Text>
          <Button
            block small success
            style={{ margin: 15, padding: 100 }}
            onPress={() => { Actions.ProductPage(this.url); }}
          >
          <Text>Purchase</Text>
          </Button>
          <Text style={mainTextStyle}>url: {url}</Text>
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
    fontSize: 19,
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
    width: null
  }
};
export default ProductDetail;
