import React from 'react';
import { View } from 'react-native';
import { Text, Card } from 'native-base';

const TestimonialDetail = ({ testimonial }) => {
  const { review } = testimonial;
  const {
    headerTextStyle
  } = styles;

  return (
      <Card>
        <View>
          <Text style={headerTextStyle}>{review}</Text>
        </View>
      </Card>
  );
};

const styles = {
  headerTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ab8321',
    alignItems: 'center'
  }
};
export default TestimonialDetail;
