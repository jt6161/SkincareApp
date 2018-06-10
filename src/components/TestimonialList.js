import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

class TestimonialList extends Component {
  state = {
    testimonials: []
  }

  componentDidMount() {
    axios.get('http://localhost:8000/testimonials')
      .then(response => this.setState({ testimonials: response.data }));
  }

  renderTestimonials() {
    return this.state.testimonials;
  }
  render() {
    return (
      <View>
        {this.renderTestimonials()}
      </View>
    );
  }
}
export default TestimonialList;
