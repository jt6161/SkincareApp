import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Right, Content, Textarea, Form } from 'native-base';

export default class Testimonials extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Customer Testimonials</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
          </Form>
        </Content>
      </Container>
    );
  }
}
