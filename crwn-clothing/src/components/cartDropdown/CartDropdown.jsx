import CustomButton from '../button/Button';
import CartItem from '../cartItem/CartItem';
import { Fragment, useContext } from 'react';
import { CartContext } from '../../contexts/Cart';
import './cartDropdown.styles.scss';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('checkout');
    setIsCartOpen(false);
  };

  const closeCartDropdown = () => {
    setIsCartOpen(false);
  };

  return (
    <Fragment>
      <div className={`cart__dropdown__container`}>
        <div className="cart__items">
          {cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
          <CustomButton onClick={navigateHandler}>Go To Checktout</CustomButton>
        </div>
      </div>
      <div className="overlay" onClick={closeCartDropdown}></div>
    </Fragment>
  );
};

export default CartDropdown;
