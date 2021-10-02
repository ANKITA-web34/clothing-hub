import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCUQIuB0ndtx0Uh7O8wBtWaSJlb6E-mZ8Q",
  authDomain: "clothing-hub-db.firebaseapp.com",
  projectId: "clothing-hub-db",
  storageBucket: "clothing-hub-db.appspot.com",
  messagingSenderId: "9194617179",
  appId: "1:9194617179:web:6a1c10890e9331b763427e",
  measurementId: "G-T3Z13EQV8K",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firebasestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
