import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navigation.styles.scss';
const NavigationBar = () => {
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
          <Link className="nav__link" to={'auth'}>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
