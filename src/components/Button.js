import React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';

const Button = ({ children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      onPress={() => {
    Alert.alert('You push my buttons!');
  }}
      style={buttonStyle}
    >
      <Text
        style={textStyle}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ffc40b',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffc40b',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
