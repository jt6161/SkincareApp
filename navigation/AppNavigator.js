import React, { Component } from 'react';
// import { Alert } from 'react-native';
// import { StackViewStyleInterpolator } from 'react-navigation-stack';
import { Router, Scene } from 'react-native-router-flux';
import Products from '../src/components/Products';
import THCProducts from '../src/components/THCProducts';
import Medibles from '../src/components/Medibles';
import Home from '../src/components/Home';
import Menu from '../src/components/Menu';
import Testimonials from '../src/components/Testimonials';
import About from '../src/components/About';
import AddTestimonial from '../src/components/AddTestimonial';
import Dispensary from '../src/components/Dispensary';
import Cart from '../src/components/Cart';
import Press from '../src/components/Press';
import ProductPage1 from '../src/components/ProductPage1';

export default class AppNavigator extends Component {

// state = {
//   cart: []
// }
//
// addToCart(item) {
//   this.setState({ cart: [...this.state.cart, item] });
//   setTimeout(() => {
//     Alert.alert('Added to Cart');
//   }, 100);
// }
//
// fetchCart() {
//   return this.state.cart;
// }

render() {
  return (
    <Router hideNavBar="true">
        <Scene key="root">
        <Scene key="Home" component={Home} title="420 Skincare" initial />
        <Scene
          key="Products" component={Products} title="CBD Products"
          // addToCart={this.addToCart.bind(this)}
        />
        <Scene key="About" component={About} title="About" />
        <Scene key="Menu" component={Menu} title="Menu" />
        <Scene key="THCProducts" component={THCProducts} title="THC Products" />
        <Scene key="Medibles" component={Medibles} title="420 Medibles" />
        <Scene key="Testimonials" component={Testimonials} title="Customer Testimonials" />
        <Scene key="AddTestimonial" component={AddTestimonial} title="Add Your Testimonial" />
        <Scene key="Dispensary" component={Dispensary} title="Dispensary List" />
        <Scene
          key="Cart"
          component={Cart}
          title="Cart"
          // fetchCart={this.fetchCart.bind(this)}
        />
        <Scene key="Press" component={Press} title="News Articles" />
        <Scene key="ProductPage1" component={ProductPage1} title="Product Page" />
        </Scene>
    </Router>
    );
  }
}
