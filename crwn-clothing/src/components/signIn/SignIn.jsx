// import { getRedirectResult } from 'firebase/auth';
// import { useEffect } from 'react';
import {
  // auth,
  signInWithGooglePopUp,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../signUpForm/SignUpForm';
const SignIn = () => {
  // useEffect to check if login has be done yet.
  // useEffect(() => {
  //   async function logWithRedi() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   logWithRedi();
  // }, []);

  const signInGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    // console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={signInGoogleUser}>Sign In with Google popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
