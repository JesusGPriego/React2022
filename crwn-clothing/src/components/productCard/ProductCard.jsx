import { CartContext } from '../../contexts/Cart';
import CustomButton from '../button/Button';
import './productCard.styles.scss';
const { Fragment, useContext } = require('react');

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <Fragment>
      <div className="product__card__container">
        <img src={imageUrl} alt={`image of ${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <CustomButton buttonType={'inverted'} onClick={addProductToCart}>
          Add to cart
        </CustomButton>
      </div>
    </Fragment>
  );
};

export default ProductCard;
