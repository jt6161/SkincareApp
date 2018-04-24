import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection2 from './CardSection';

const OrderDetail = ({ order }) => {
  const { name, email } = order;
  const {
    headerTextStyle,
    mainTextStyle,
  } = styles;

  return (
    <Card>
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
  }
};

export default OrderDetail;
