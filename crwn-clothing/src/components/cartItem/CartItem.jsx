import { Fragment } from 'react';
import './cartItem.scss';
const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <Fragment>
      <div className="cart__item__container">
        <img src={imageUrl} alt={`image of ${name}`} />
        <div className="item__details">
          <span className="name">{`${name}, ${quantity}`}</span>
          <span className="price">{`${quantity} x 
          ${price}€`}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
