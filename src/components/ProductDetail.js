import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Button, Row, Card, CardItem } from 'native-base';
// import Card from './Card';
// import CardItem from './CardItem';

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
    Button small rounded success
    style={{ margin: 10, padding: 100 }}
    onPress={() => Linking.openURL(url)}
    >
      <Text>Purchase Product</Text>
    </Button>) : (
    <Button
     Button small rounded disabled
     style={{ margin: 20, padding: 100 }}
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
        </View>
      </CardItem>

      <CardItem>
        <View>
          <Text style={headerTextStyle}>Price: ${price}</Text>
        </View>
      </CardItem>

      <CardItem>
        <Row>
          {btn}
        </Row>
      </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  mainTextStyle: {
    fontSize: 14
  },
  imageStyle: {
    height: 400,
    flex: 1,
    width: null
  }
};
export default ProductDetail;
