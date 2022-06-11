import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/User';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cartIcon/CartIcon';
import CartDropdown from '../../components/cartDropdown/CartDropdown';
import { CartContext } from '../../contexts/Cart';

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { cartState, setCartState } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
  };

  const isVisible = !cartState['visible'];
  const toggleDropDown = () => {
    setCartState({ visible: isVisible });
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
        {isVisible && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
