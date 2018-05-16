import React from 'react';
import { View, Image, Linking } from 'react-native';
import { Text, Button, Card, CardItem } from 'native-base';

const ProductDetail = ({ product }) => {
  const { name, img_url, description, price, url } = product;
  const {
    headerContentStyle,
    headerTextStyle,
    mainTextStyle,
    imageStyle
  } = styles;

  const btn = (url ? (
    <Button
      block success
      style={{ margin: 15, padding: 100 }}
      onPress={() => Linking.openURL(url)}
    >
      <Text>Purchase</Text>
    </Button>) : (
    <Button
      block disabled
      style={{ margin: 5, padding: 100 }}
    >
      <Text>Coming Soon</Text>
    </Button>));

  return (
     <Card>
      <CardItem bordered>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name}</Text>
        </View>
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
          <Text style={headerTextStyle}>Price: ${price}</Text>
        </View>
      </CardItem>

      <CardItem>
        <View>
          {btn}
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
    fontSize: 17,
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
export default ProductDetail;
