import React, { Component } from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import axios from 'axios';
import ProductDetail from './ProductDetail';

class ProductList extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get('https://server420skincare.herokuapp.com/products')
      .then(response => this.setState({ products: response.data }));
  }

  renderProducts() {
    if (this.state.products.length === 0) {
      return <Spinner color='#ab8321' />;
    }
    return this.state.products.map(product =>
      <ProductDetail key={product.name} product={product} addToCart={this.props.addToCart} />
    );
  }

  render() {
    return (
      <View>
        {this.renderProducts()}
      </View>
    );
  }
}
export default ProductList;
