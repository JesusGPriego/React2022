import { useContext } from 'react';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import { CartContext } from '../../contexts/Cart';
import './checkout.styles.scss';
const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    decreaseItemFromCart,
    removeItemFromCart,
    cartTotal,
  } = useContext(CartContext);
  const handleClick = e => {
    e.preventDefault();
    if (e.target.tagName.toLowerCase() === 'button') {
      //   console.log(e.target.parentNode.closest('.id_giver'));
      const id = Number(e.target.parentNode.closest('.id_giver').id);
      const whatToDo = e.target.id;
      const selectedItem = cartItems.find(cartItem => cartItem.id === id);
      checkoutFunctions[whatToDo](selectedItem);
    }
  };
  const checkoutFunctions = {
    increase: item => {
      addItemToCart(item);
    },
    decrease: item => {
      decreaseItemFromCart(item);
    },
    remove: item => {
      removeItemFromCart(item);
    },
  };

  const headers = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

  return (
    <div className="checkout__container">
      <div className="checkout__header">
        {headers.map(header => (
          <div key={header} className="header__block">
            <span>{header}</span>
          </div>
        ))}
      </div>
      <div className="id__container" onClick={handleClick}>
        {cartItems.map(cartItem => (
          <div className="id_giver" key={cartItem.id} id={cartItem.id}>
            <CheckoutItem cartItem={cartItem} />
          </div>
        ))}
      </div>
      <span className="total">Total: {cartTotal}€</span>
    </div>
  );
};

export default Checkout;
