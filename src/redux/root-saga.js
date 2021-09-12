import { all, call } from '@redux-saga/core/effects';
import { fetchCollectionStart } from './shop/shop.saga';
import { userSagas } from './user/userSagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSagas)]);
}
