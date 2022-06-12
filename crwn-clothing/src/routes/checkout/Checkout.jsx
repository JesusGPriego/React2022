import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';

const Checkout = () => {
  const { cartItems, addItemToCart, decreaseItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  console.log(cartItems);
  const handleClick = e => {
    e.preventDefault();
    if (e.target.tagName.toLowerCase() === 'button') {
      const id = Number(e.target.parentNode.id);
      const whatToDo = e.target.id;
      const selectedItem = cartItems.find(cartItem => cartItem.id === id);
      switch (whatToDo) {
        case 'increase':
          addItem(selectedItem);
          break;
        case 'decrease':
          decreaseItem(selectedItem);
          break;
        case 'remove':
          removeItem(selectedItem);
          break;
        default:
          break;
      }
    }
  };

  const addItem = item => {
    addItemToCart(item);
  };

  const decreaseItem = item => {
    decreaseItemFromCart(item);
  };
  const removeItem = item => {
    removeItemFromCart(item);
  };

  return (
    <div onClick={handleClick}>
      {cartItems.map(cartItem => (
        <div key={cartItem.id} id={cartItem.id}>
          <img src={cartItem.imageUrl} alt={`Image of ${cartItem.name}`} />
          <p>{cartItem.name}</p>
          <button id="decrease">{'<'}</button>
          <p>{cartItem.quantity}</p>
          <button id="increase">{'>'}</button>
          <p>{cartItem.price * cartItem.quantity}€</p>
          <button id="remove">{'X'}</button>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
