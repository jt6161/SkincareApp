import React, { Component } from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import axios from 'axios';
import THCProductDetail from './THCProductDetail';

class THCProductList extends Component {
  state = {
    thcproducts: []
  }

  componentDidMount() {
    axios.get('https://server420skincare.herokuapp.com/thcproducts')
      .then(response => this.setState({ thcproducts: response.data }));
  }

  renderTHCProducts() {
    if (this.state.thcproducts.length === 0) {
            return <Spinner color='black' />;
    }
    return this.state.thcproducts.map(thcproduct =>
      <THCProductDetail key={thcproduct.name} thcproduct={thcproduct} />
    );
  }

  render() {
    return (
      <View>
        {this.renderTHCProducts()}
      </View>
    );
  }
}
export default THCProductList;
