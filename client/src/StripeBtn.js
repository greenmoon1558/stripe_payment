import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const stripeBtn = props => {
  const publishableKey = "pk_test_pXcptytFO7HfLDXVjJvzshrO003XdBYXBW";

  const formatAmount = () => {
    try {
      return parseFloat(props.amount) * 100;
    } catch (error) {
      return 0;
    }
  };
  const amount = formatAmount();
  const onToken = token => {
    const body = {
      amount,
      token: token
    };
    axios
      .post("http://localhost:8000/", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  return (
    <StripeCheckout
      label="pay"
      name="Stripe charge"
      description="Pay today."
      panelLabel="payment"
      amount={amount}
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};
export default stripeBtn;
