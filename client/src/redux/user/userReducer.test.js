import UserActionTypes from './userTypes';
import userReducer from './userReducer';

const initialState = {
  currentUser: null,
  error: null
};

describe('userReducer', () => {
  test('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  test('should set currentUser to payload and signInSuccess action', () => {
    const mockUser = {
      id: 1,
      displayName: 'Siddhant'
    };
    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: mockUser
      }).currentUser
    ).toEqual(mockUser);
  });

  test('should set currentUser to null and signOutSuccess action', () => {
    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_OUT_SUCCESS
      }).currentUser
    ).toBe(null);
  });

  test('should set error to payload and signInFailure, signUpFailure,signOutFailure action', () => {
    const mockError = {
      message: 'Error',
      code: 404
    };

    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: mockError
      }).error
    ).toBe(mockError);

    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: mockError
      }).error
    ).toBe(mockError);

    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: mockError
      }).error
    ).toBe(mockError);
  });
});
