import React from 'react';
import { Text, View } from 'react-native';
import Card2 from './Card2';
import CardSection2 from './CardSection2';

const OrderDetail = ({ order }) => {
  const { name, email } = order;
  const {
    headerTextStyle,
    mainTextStyle,
  } = styles;

  return (
    <Card2>
      <CardSection2>
        <View>
          <Text style={headerTextStyle}>{name}</Text>
        </View>
      </CardSection2>
      
      <CardSection2>
        <View>
          <Text style={mainTextStyle}>{email}</Text>
        </View>
      </CardSection2>
    </Card2>
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
  }
};

export default OrderDetail;
