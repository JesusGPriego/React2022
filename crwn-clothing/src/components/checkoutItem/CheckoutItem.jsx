import './checkoutItem.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  return (
    <div className="checkout__item__container">
      <div className="image__container">
        <img src={cartItem.imageUrl} alt={`${cartItem.name}`} />
      </div>

      <span className="name">{cartItem.name}</span>

      <div className="quantity">
        <button className="arrow" id="decrease">
          &#10094;
        </button>
        <span className="value">{cartItem.quantity}</span>
        <button className="arrow" id="increase">
          &#10095;
        </button>
      </div>

      <span className="price">{cartItem.price * cartItem.quantity}€</span>
      <button className="remove__button" id="remove">
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
