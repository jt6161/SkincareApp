import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ProductDetail from './ProductDetail';

class ProductList extends Component {
  state = { products: [] };

  componentDidMount() {
    axios.get('https//http://localhost:8000/products')
      .then(response => this.setState({ products: response.data }));
  }

  renderProducts() {
    return this.state.products.map(product =>
      <ProductDetail key={product.name} product={product} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderProducts()}
      </ScrollView>
    );
  }
}

export default ProductList;
