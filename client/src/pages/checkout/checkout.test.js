import React from 'react';
import { shallow } from 'enzyme';
import CheckoutPage from './checkout.component';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);
const store = mockStore({});

let wrapper;
beforeEach(() => {
  const mockProps = {
    cartItems: [],
    total: 100
  };
  wrapper = shallow(
    <Provider store={store}>
      <CheckoutPage {...mockProps} />
    </Provider>
  );
});

test('should render CheckoutPage component', () => {
  expect(wrapper).toMatchSnapshot();
});
