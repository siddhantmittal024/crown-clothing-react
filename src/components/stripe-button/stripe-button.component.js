import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';

const onToken = (token) => {
  console.log(token);
  toast.success('Payment Successful!');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IkWd7SDFnEwkem8hfEq8HMAG62nlPQjNvN1PulIZ6rxI7uR5C7kJSfNYWiMJJBTnpVQbxNo2l9OVfkOqhgePhqA00teFJWLDX';
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
