import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/Cart';
import { CartIconContainer, ItemCount } from './cartIcon.styles.jsx';

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
