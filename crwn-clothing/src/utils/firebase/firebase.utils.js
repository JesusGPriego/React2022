import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log('done');
};

export const getCollectionsAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

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

/**
 * Listens to whenever 'auth' changes and triggers a callback function.
 *
 * @param callback - This function triggers whenever 'onAauthStateChanged' is called
 */
export const onAuthStateChangedLIstener = callback => {
  if (!callback) return;
  onAuthStateChanged(auth, callback);
};
