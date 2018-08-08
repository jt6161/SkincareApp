import React, { Component } from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import FooterIcon from './src/components/FooterIcon';
import Products from './src/components/Products';
import THCProducts from './src/components/THCProducts';
import Home from './src/components/Home';
import Menu from './src/components/Menu';
import Testimonials from './src/components/Testimonials';
import About from './src/components/About';
import Login from './src/components/Login';
import Addproduct from './src/components/Addproduct';
import AddTestimonial from './src/components/AddTestimonial';
import Dispensary from './src/components/Dispensary';
import Cart from './src/components/Cart';
// import StripeCheckout from './src/components/StripeCheckout';

export default class App extends Component {
  state = {
    cart: []
  }

  addToCart(item) {
    this.setState({ cart: [...this.state.cart, item] });
    setTimeout(() => {
      console.log(this.state);
    }, 1000);
  }


  fetchCart() {
    return this.state.cart;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Router hideNavBar="true">
              <Scene key="root">
              <Scene key="Home" component={Home} title="420 Skincare" initial />
              <Scene
                key="Products" component={Products} title="CBD Products"
                addToCart={this.addToCart.bind(this)}
              />
              <Scene key="About" component={About} title="About" />
              <Scene key="Menu" component={Menu} title="Menu" />
              <Scene key="THCProducts" component={THCProducts} title="THC Products" />
              <Scene key="Testimonials" component={Testimonials} title="Customer Testimonials" />
              <Scene key="Login" component={Login} title="Admin Login" />
              <Scene key="Addproduct" component={Addproduct} title="Add New Product" />
              <Scene key="AddTestimonial" component={AddTestimonial} title="Add Your Testimonial" />
              <Scene key="Dispensary" component={Dispensary} title="Dispensary List" />
              <Scene
                key="Cart" component={Cart} title="Cart"
                fetchCart={this.fetchCart.bind(this)}
              />
              {/* <Scene key="StripeCheckout" component={StripeCheckout} title="Checkout" /> */}
            </Scene>
          </Router>
        <FooterIcon />
      </View>
    );
  }
}
