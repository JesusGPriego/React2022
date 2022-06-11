import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/Cart';
import './cartIcon.styles.scss';

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <div className="cart__icon__container">
      <ShoppingIcon className="shopping__icon" />
      <span className="item__count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
