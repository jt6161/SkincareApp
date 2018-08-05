import React, { Component } from 'react';
import { View } from 'react-native';
import stripe from 'tipsi-stripe';
stripe.init({
  publishableKey: <your_stripe_publishable_key>,
});

const theme = {
  primaryBackgroundColor: <hex_color>,
  secondaryBackgroundColor: <hex_color>,
  primaryForegroundColor: <hex_color>,
  secondaryForegroundColor: <hex_color>,
  accentColor: <hex_color>,
  errorColor: <hex_color>
};

class NewCardPage extends Component {
  componentDidMount() {

    const options = {
      smsAutofillDisabled: true,
      requiredBillingAddressFields: 'zip', // or 'full'
      theme
    };
    stripe.paymentRequestWithCardForm(options)
      .then(response => {
        // Get the token from the response, and send to your server
      })
      .catch(error => {
        // Handle error
      });
  }
  render() {
    return <View />
  }
}
