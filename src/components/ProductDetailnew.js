import React from 'react';
import { View, Image, Linking } from 'react-native';
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
  const {
    headerContentStyle,
    headerTextStyle,
    mainTextStyle,
    imageStyle
  } = styles;


  return (
    <View>
     <Card>
      <CardItem bordered>
        <Left>
          <Thumbnail source={fourtwentylogo} />
          <Body>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>CBD Bath Salts</Text>
            </View>
          </Body>
        </Left>
      </CardItem>
      <CardItem bordered>
        <Image
          style={imageStyle}
          source={{ uri: 'https://static.wixstatic.com/media/7026a3_85050c20818b447ab3e5fc5b2a29fe2f~mv2_d_3456_5184_s_4_2.jpg' }}
        />
      </CardItem>
      <CardItem>
        <View>
          <Text style={mainTextStyle}>Scoop some 420 Skincare
          CBD Bath Salts in your tub and watch it fizz! Our bath salts
          are excellent, not only for relaxation, but also for
          skin health and detoxification. The following ingredients
          work with CBD for the ultimate bath salt experience.
          Epson Salt, which absorbs through the skin to help flush
          toxins and help promote relaxation. White clay which assists
          in detoxification and purification of the skin and underlying
          issues. Sweet almond oil, which provides beneficial nutrients
          and vitamins. All bath bombs are hand-crafted and will,
          therefore, vary in appearance. Choose from 2 different scents!
          This product complies with all FDA standards and is not meant
          to diagnose, treat, cure or maintain any ailments or diseases
          in accordance with FDA guidelines.
          </Text>
          <Text style={headerTextStyle}>Price: $22.00</Text>
          <Button
            block small success
            style={{ margin: 15, padding: 100 }}
            onPress={() => { Actions.ProductPage1(); }}
          >
          <Text>Purchase</Text>
            </Button>
        </View>
      </CardItem>
    </Card>
    </View>
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
