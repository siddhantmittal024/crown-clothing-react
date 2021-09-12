import { all, call } from '@redux-saga/core/effects';
import { shopSagas } from './shop/shop.saga';
import { userSagas } from './user/userSagas';
import { cartSagas } from './cart/cartSagas';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
