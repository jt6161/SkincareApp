import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ProductDetail from './ProductDetail';

class ProductList extends Component {
  state = { products: [] };

  componentDidMount() {
    axios.get('http://localhost:8000/products')
      .then(response => this.setState({ products: response.data }));
  }

  renderProducts() {
    return this.state.products.map(product =>
      <ProductDetail key={product.name} product={product} />
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
