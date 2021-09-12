import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './userTypes';
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../firebase/firebase.utils';
import { googleSignInSuccess, googleSignInFailure } from './userAction';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
    );
  } catch (err) {
    yield put(googleSignInFailure(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
