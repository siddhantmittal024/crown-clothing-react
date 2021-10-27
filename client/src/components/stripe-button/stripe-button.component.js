import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 70;
  const publishableKey =
    'pk_test_51IkWLHSHzFLZuNVkGBxUqbqh31G9rf4muH6XOgR92rSxsW8zwMrr6VBWLjqiT3WNNrwAo85y6S6t1NTQGUGTORwW00oToTr39z';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then((response) => {
        toast.success('Payment Successful!');
      })
      .catch((error) => {
        console.log('Payment error: ', error);
        toast.error(
          'There was an issue with your payment. Please be sure you use the provided credit card!'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now 💳"
      name="CROWN CLOTHING Ltd."
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
