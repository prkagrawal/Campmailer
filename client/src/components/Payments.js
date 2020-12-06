import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    // amount: Amount of money we want to receive, we need to specify the currency. Default US dollars.
    // The unit is cent, so we should enter 500 if we want 5 dollars.
    // token: A callback function that will be called after we received an authorized token from Stripe API.
    return (
      <StripeCheckout
        name="Emaily"
        description="This is a full stack application"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;