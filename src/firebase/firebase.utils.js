import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB_8T0Qdrj6OxHIcPmSMslq67F5nnAnmBU',
  authDomain: 'crown-db-2ebf8.firebaseapp.com',
  projectId: 'crown-db-2ebf8',
  storageBucket: 'crown-db-2ebf8.appspot.com',
  messagingSenderId: '529138985208',
  appId: '1:529138985208:web:8efc151a6889d9364d730d',
  measurementId: 'G-R9CLCV9X3M'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error Creating User!', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
