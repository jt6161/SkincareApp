import React from 'react';
import { ScrollView } from 'react-native';
import OrderList from './OrderList';

export default class Orders extends React.Component {
  render() {
    return (
      <ScrollView>
        <OrderList />
      </ScrollView>
     );
  }
}
