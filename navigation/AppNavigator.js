import React, { Component } from 'react';
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
import ProductPage from '../src/components/ProductPage';
import ProductPage1 from '../src/components/ProductPage1';
import ProductPage2 from '../src/components/ProductPage2';
import ProductPage3 from '../src/components/ProductPage3';
import ProductPage4 from '../src/components/ProductPage4';
import ProductPage5 from '../src/components/ProductPage5';
import ProductPage6 from '../src/components/ProductPage6';
import ProductPage7 from '../src/components/ProductPage7';
import ProductPage8 from '../src/components/ProductPage8';
import DistributorPage from '../src/components/DistributorPage';

export default class AppNavigator extends Component {


render() {
  return (
    <Router hideNavBar="true">
        <Scene key="root">
        <Scene key="Home" component={Home} title="420 Skincare" initial />
        <Scene key="Products" component={Products} title="CBD Products" />
        <Scene key="About" component={About} title="About" />
        <Scene key="Menu" component={Menu} title="Menu" />
        <Scene key="THCProducts" component={THCProducts} title="THC Products" />
        <Scene key="Medibles" component={Medibles} title="420 Medibles" />
        <Scene key="Testimonials" component={Testimonials} title="Customer Testimonials" />
        <Scene key="AddTestimonial" component={AddTestimonial} title="Add Your Testimonial" />
        <Scene key="Dispensary" component={Dispensary} title="Dispensary List" />
        <Scene key="Cart" component={Cart} title="Cart" />
        <Scene key="Press" component={Press} title="News Articles" />
        <Scene key="ProductPage" component={ProductPage} title="Product Page" />
        <Scene key="ProductPage1" component={ProductPage1} title="Bath Salts" />
        <Scene key="ProductPage2" component={ProductPage2} title="Bath Bomb Dust" />
        <Scene key="ProductPage3" component={ProductPage3} title="Body Cream" />
        <Scene key="ProductPage4" component={ProductPage4} title="Body Butter" />
        <Scene key="ProductPage5" component={ProductPage5} title="Soap" />
        <Scene key="ProductPage6" component={ProductPage6} title="Bath Bombs" />
        <Scene key="ProductPage7" component={ProductPage7} title="Tincture" />
        <Scene key="ProductPage8" component={ProductPage8} title="Bath Bomb Body Butter" />
        <Scene key="DistributorPage" component={DistributorPage} title="Distributor Page" />
        </Scene>
    </Router>
    );
  }
}
