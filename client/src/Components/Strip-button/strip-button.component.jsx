import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JlykhSB4gPcpuXt9SaSIVqAcwRT5taKVjyGkY2q4XkbyBzyQ32hzy8XWCwWTPqPgDRkU1qbD0AzFPi7ApPVEEMi00DD6BN9p7";

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('payment successful')
    }).catch(error => {
      console.log('payment error: ', JSON.parse(error))
      alert(
        'There is an issue with your payment. Please sure you are the provided credit card'
        )
    })
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing-Hub"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
