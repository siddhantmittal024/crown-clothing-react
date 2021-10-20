import { all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/userTypes';
import { clearCart } from './cartAction';

export function* clearCartSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
