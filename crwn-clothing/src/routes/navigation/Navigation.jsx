import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/User';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const NavigationBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo__container" to={'/'}>
          <Logo />
        </Link>

        <div className="nav__link__container">
          <Link className="nav__link" to={'shop'}>
            Shop
          </Link>
          {currentUser ? (
            <span onClick={signOutHandler} className="nav__link">
              Sign Out
            </span>
          ) : (
            <Link className="nav__link" to={'auth'}>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
