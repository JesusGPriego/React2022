import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC1il6DlBYvSBBT5jyBYQnyooOePPHcn0I',
  authDomain: 'crwn-clothing-273ae.firebaseapp.com',
  projectId: 'crwn-clothing-273ae',
  storageBucket: 'crwn-clothing-273ae.appspot.com',
  messagingSenderId: '860933238943',
  appId: '1:860933238943:web:243996836ad71f093bb2aa',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// gettin auth provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// getting auth

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

// firestore

const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;

  // Checking if doc already exists:
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user data exists:
  if (userSnapshot.exists()) return userDocRef;

  // else:
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInfo,
    });
  } catch (error) {
    console.log('error creating user', error.message);
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (email && password) {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
};
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (email && password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }
};

export const signOutUser = async () => {
  await signOut(auth);
};
