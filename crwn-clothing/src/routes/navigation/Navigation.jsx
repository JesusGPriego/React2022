import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/User';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cartIcon/CartIcon';
import CartDropdown from '../../components/cartDropdown/CartDropdown';
import { CartContext } from '../../contexts/Cart';
import './navigation.styles.scss';

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
  };
  const toggleDropDown = () => {
    setIsCartOpen(!isCartOpen);
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
          <span onClick={toggleDropDown} className="nav__link">
            <CartIcon />
          </span>
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
