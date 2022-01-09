import React from 'react';
import { render } from 'enzyme';
import CheckoutPage  from './checkout.component';

let wrapper;
beforeEach(() => {
  const mockProps = {
    cartItems: [],
    total: 100
  };
  wrapper = render(<CheckoutPage {...mockProps} />);
});

test('should render CheckoutPage component', () => {
  expect(wrapper).toMatchSnapshot();
});
