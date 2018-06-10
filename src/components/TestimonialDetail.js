import React from 'react';
import { View } from 'react-native';
import { Text, Card, CardItem } from 'native-base';

const TestimonialDetail = ({ testimonial }) => (
     <Card>
      <CardItem>
        <View>
          <Text>{testimonial}</Text>
        </View>
      </CardItem>
    </Card>
  );
export default TestimonialDetail;
