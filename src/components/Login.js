import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';
import Container from './Container';
import Button from './Button';
import Label from './Label';

export default class Login extends Component {
  render() {
    return (
        <ScrollView style={styles.scroll}>
        ...
        <Container>
    <Button
        label="Forgot Login/Pass"
        styles={{ button: styles.alignRight, label: styles.label }}
        onPress={this.press.bind(this)}
    />
        </Container>
        <Container>
    <Label text="Username or Email" />
    <TextInput
        style={styles.textInput}
    />
</Container>
<Container>
    <Label text="Password" />
    <TextInput
        secureTextEntry
        style={styles.textInput}
    />
</Container>
<Container>
    <Button
        styles={{ button: styles.transparentButton }}
        onPress={this.press.bind(this)}
    >
        <View style={styles.inline}>
            <Icon name="facebook-official" size={30} color="#3B5699" />
            <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text>
            <Text style={styles.buttonBlueText}>with Facebook</Text>
        </View>
    </Button>
</Container>
        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  scroll: {
      backgroundColor: '#E1D7D8',
      padding: 30,
      flexDirection: 'column'
  },
  label: {
    color: '#0d8898',
    fontSize: 20
},
alignRight: {
    alignSelf: 'flex-end'
},
textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF'
},
});
