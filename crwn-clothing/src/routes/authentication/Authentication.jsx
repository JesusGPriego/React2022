import SignUpForm from '../../components/signUpForm/SignUpForm';
import SignInForm from '../../components/signInForm/SignInForm';
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication__container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
