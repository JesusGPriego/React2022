import SignUpForm from '../../components/signUpForm/SignUpForm';
import SignInForm from '../../components/signInForm/SignInForm';
import { AuthContainer } from './authentication.styles.jsx';

const Authentication = () => {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
};

export default Authentication;
