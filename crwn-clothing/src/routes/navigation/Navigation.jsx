import { Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/User';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cartIcon/CartIcon';
import CartDropdown from '../../components/cartDropdown/CartDropdown';
import { CartContext } from '../../contexts/Cart';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

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
      <NavigationContainer>
        <LogoContainer to={'/'}>
          <Logo />
        </LogoContainer>

        <NavLinks>
          <NavLink to={'shop'}>Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to={'auth'}>Sign In</NavLink>
          )}
          <span onClick={toggleDropDown}>
            <CartIcon />
          </span>
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
