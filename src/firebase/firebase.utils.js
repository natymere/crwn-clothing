import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA0EyrH7oxcPEs_ECuUmNB_0z4EOhmmZhM",
  authDomain: "crwn-db-bd63b.firebaseapp.com",
  databaseURL: "https://crwn-db-bd63b.firebaseio.com",
  projectId: "crwn-db-bd63b",
  storageBucket: "crwn-db-bd63b.appspot.com",
  messagingSenderId: "262567327004",
  appId: "1:262567327004:web:a2c3c709392d28ee5df6d9",
  measurementId: "G-ZH9MQFZX23"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;