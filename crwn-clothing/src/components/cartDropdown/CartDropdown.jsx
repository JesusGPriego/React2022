import './cartDropdown.styles.scss';
import CustomButton from '../button/Button';
import CartItem from '../cartItem/CartItem';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className={`cart__dropdown__container`}>
      <div className="cart__items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
        <CustomButton>Go To Checktout</CustomButton>
      </div>
    </div>
  );
};

export default CartDropdown;
