import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import TestimonialDetail from './TestimonialDetail';

class TestimonialList extends Component {
  state = {
    testimonials: []
  }

  componentDidMount() {
    axios.get('https://server420skincare.herokuapp.com/testimonials')
      .then(response => this.setState({ testimonials: response.data }));
  }

  renderTestimonials() {
    return this.state.testimonials.map(testimonial =>
<TestimonialDetail key={testimonial.review} testimonial={testimonial} />
    );
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
