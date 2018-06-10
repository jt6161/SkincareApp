import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

const TestimonialDetail = ({ Testimonial }) => {
  const { review } = Testimonial;
  const {
    headerTextStyle
  } = styles;


  return (

        <View>
          <Text style={headerTextStyle}>{review}</Text>
        </View>

  );
};

const styles = {
  headerTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ab8321',
    alignItems: 'center'
  }
};
export default TestimonialDetail;
