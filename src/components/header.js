import React from 'react';
import { Text, View, Image } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  const pic = {
    uri: 'https://static.wixstatic.com/media/dbda37_b4905467220149a392ae67875a217abf~mv2.png/v1/fill/w_381,h_132,al_c,usm_0.66_1.00_0.01/dbda37_b4905467220149a392ae67875a217abf~mv2.png'
  };

  return (
    <View style={viewStyle}>
      <Image source={pic} style={{ width: 220, height: 96 }} />
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold'
  }
};

export default Header;
