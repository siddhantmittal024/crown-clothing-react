import { takeLatest, call, put } from 'redux-saga/effects';

import UserActionTypes from './userTypes';

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from './userAction';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils';

import {
  getSnapshotFromUserAuth,
  signInWithGoogle,
  signInWithEmail,
  isUserAuthenticated,
  signOut,
  signUp,
  signInAfterSignUp,
  onGoogleSignInStart,
  onEmailSignInStart,
  onCheckUserSession,
  onSignOutStart,
  onSignUpStart,
  onSignUpSuccess
} from './userSagas';

describe('on signup success saga', () => {
  test('should trigger on SIGN_UP_SUCCESS', () => {
    const generator = onSignUpSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
    );
  });
});
