import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
// import Button from './Button';

const ProductDetail = ({ product }) => {
  const { name, img_url, description } = product;
  const {
    headerContentStyle,
    headerTextStyle,
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
          <Text style={headerTextStyle}>{description}</Text>
        </View>
      </CardSection>

      <CardSection>
        {/* <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button> */}
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
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default ProductDetail;
