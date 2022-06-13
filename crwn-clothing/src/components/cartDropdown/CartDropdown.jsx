import CustomButton from '../button/Button';
import CartItem from '../cartItem/CartItem';
import { Fragment, useContext } from 'react';
import { CartContext } from '../../contexts/Cart';
import { useNavigate } from 'react-router-dom';
import { Overlay, Container, Item, Message } from './cartDropdown.styles.jsx';

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
      <Container>
        <Item>
          {cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <Message>Your cart is empty</Message>
          )}
          <CustomButton onClick={navigateHandler}>Go To Checktout</CustomButton>
        </Item>
      </Container>
      <Overlay onClick={closeCartDropdown}></Overlay>
    </Fragment>
  );
};

export default CartDropdown;
