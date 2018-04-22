import React from 'react';
import { ScrollView, View } from 'react-native';
import { Content, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import ProductList from './ProductList';

export default class Home extends React.Component {
  render() {
    return (
      <View>
      <ScrollView>
      <ProductList />
    <Content padder>
    <Button
      dark bordered style={{ alignSelf: 'center', margin: 30 }}
      onPress={() => { Actions.pageOne(); }}
    >
         <Text>Goto Page 1</Text>
     </Button>
     </Content>
       </ScrollView>
    </View>
  );
  }
}
