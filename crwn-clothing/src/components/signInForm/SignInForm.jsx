import { useState } from 'react';
import FormInput from '../formInput/FormInput';
import './signInForm.styles.scss';
import {
  signInWithGooglePopUp,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import CustomButton, { BUTTON_TYPE_CLASSES } from '../button/Button.jsx';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWighGoogle = async () => {
    try {
      await signInWithGooglePopUp();
    } catch (error) {
      console.log('error: popup windows has been closed before auth');
    }
  };

  return (
    <div className="sing__up__container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Email'}
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label={'Password'}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons__container">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWighGoogle}
          >
            Google Sign In
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
