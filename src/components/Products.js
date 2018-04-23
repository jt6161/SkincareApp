import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Button, Row } from 'native-base';
import { Actions } from 'react-native-router-flux';
import ProductList from './ProductList';

export default class Products extends React.Component {
  render() {
    return (
      <ScrollView>
      <ProductList />
      <Row>
         <Button
           Button small rounded info
           style={{ margin: 10 }}
           onPress={() => { Actions.pageOne(); }}
         >
            <Text>Page 1</Text>
        </Button>
        <Button
          Button small rounded dark
          style={{ margin: 10 }}
          onPress={() => { Actions.pageTwo(); }}
        >
             <Text>Page 2</Text>
         </Button>
          <Button
            Button small rounded warning
            style={{ margin: 10 }}
            onPress={() => { Actions.About(); }}
          >
               <Text>About</Text>
           </Button>
         </Row>
       </ScrollView>
     );
  }
}
