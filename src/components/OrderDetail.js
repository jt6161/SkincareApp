import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const OrderDetail = ({ order }) => {
  const { name, email } = order;
  const {
    headerTextStyle,
    mainTextStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Text style={headerTextStyle}>{name}</Text>
        </View>
      </CardSection>

      <CardSection>
        <View>
          <Text style={mainTextStyle}>{email}</Text>
        </View>
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
  }
};

export default OrderDetail;
