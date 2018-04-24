import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

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
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: img_url }}
        />
      </CardSection>

      <CardSection>
        <View>
          <Text style={mainTextStyle}>{description}</Text>
        </View>
      </CardSection>

      <CardSection>
        <View>
          <Text style={headerTextStyle}>Price: ${price}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button
          onPress={() => Linking.openURL(url)}
        >
          Purchase
        </Button>
      </CardSection>

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
