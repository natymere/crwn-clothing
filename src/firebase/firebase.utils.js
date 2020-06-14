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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth)
    return;

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
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;

};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;