import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Button, Row } from 'native-base';
import Card from './Card';
import CardSection from './CardSection';


const ProductDetail = ({ product }) => {
  const { name, img_url, description, price, url } = product;
  const {
    headerContentStyle,
    headerTextStyle,
    mainTextStyle,
    imageStyle
  } = styles;

  const btn = (url ? (<Button
    Button small rounded success
    style={{ margin: 20, padding: 100 }}
    onPress={() => Linking.openURL(url)}
  >
       <Text>Purchase Products</Text>
   </Button>) : (<Button
     Button small rounded disabled
     style={{ margin: 20, padding: 100 }}
   >
        <Text>Coming Soon</Text>
    </Button>));

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
          <Row>
            {btn}
          </Row>
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
