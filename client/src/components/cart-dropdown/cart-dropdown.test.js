import React from 'react';
import { shallow } from 'enzyme';

import { CartDropdown } from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCartHidden } from '../../redux/cart/cartAction';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);
const store = mockStore({});

describe('CartDropdown component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    };

    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch
    };

    wrapper = shallow(
      <Provider store={store}>
        <CartDropdown {...mockProps} />
      </Provider>
    );
  });

  test('should render CartDropdown component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call history.push when button is clicked', () => {
    wrapper.find('CartDropdownButton').at(0).simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });

  test('should render an equal number of CartItem components as the cartItems prop', () => {
    expect(wrapper.find(CartItem).length).toEqual(0);
  });

  test('should render EmptyMessageContainer if cartItems is empty', () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      dispatch: mockDispatch
    };

    const newWrapper = shallow(
      <Provider store={store}>
        <CartDropdown {...mockProps} />
      </Provider>
    );
    expect(newWrapper.exists('EmptyMessageContainer')).toBe(false);
  });
});
