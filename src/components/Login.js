import React, { Component } from 'react';
import {
  StyleSheet,
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
        <Container>
    <Button
        label="Forgot Login/Pass"
        styles={{ button: styles.alignRight, label: styles.label }}
        onPress={(this)}
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
        onPress={(this)}
    />
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
    height: 50,
    fontSize: 20,
    backgroundColor: '#FFF'
  }
});
