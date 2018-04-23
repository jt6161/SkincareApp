import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import OrderDetail from './OrderDetail';

class OrderList extends Component {
  state = { orders: [] };

  componentDidMount() {
    axios.get('http://localhost:8000/orders')
      .then(response => this.setState({ orders: response.data }));
  }

  renderOrders() {
    return this.state.orders.map(order =>
      <OrderDetail key={order.name} order={order} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderOrders()}
      </ScrollView>
    );
  }
}

export default OrderList;
