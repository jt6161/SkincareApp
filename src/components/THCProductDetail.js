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
        </View>
      </CardItem>
      <CardItem>
        <Text style={mainTextStyle}>
          These products contain THC and are only available at
          state-licensed dispensaries.
          You must have an MMJ card in order to purchase these products.</Text>
      </CardItem>
      <CardItem>
        <Button
          block small dark
          onPress={() => { Actions.Dispensary(); }}
          style={{ margin: 5, padding: 100 }}
        >
          <Text>Dispensary List</Text>
        </Button>
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
    color: 'black',
    alignItems: 'center'
  },
  mainTextStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black'
  },
  copyright: {
    fontSize: 12,
    padding: 5,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center'
  },
  imageStyle: {
    height: 400,
    flex: 1,
    width: null
  }
};
export default THCProductDetail;
