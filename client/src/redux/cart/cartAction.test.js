import { CartActionTypes } from './cartTypes';
import {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItemFromCart,
  clearCart
} from './cartAction';

describe('toggleCartHidden action', () => {
  test('should create the toggleHidden action', () => {
    expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
  });
});

describe('addItem action', () => {
  test('should create the addItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = addItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('removeItem action', () => {
  test('should create the removeItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = removeItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearItemFromCart action', () => {
  test('should create the clearItemFromCart action', () => {
    const mockItem = {
      id: 1
    };

    const action = clearItemFromCart(mockItem);

    expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearCart action', () => {
  test('should create the clearCart action', () => {
    expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
  });
});
