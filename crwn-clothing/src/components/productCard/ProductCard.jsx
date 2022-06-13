import CustomButton, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { Fragment } from 'react';
import './productCard.styles.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <Fragment>
      <div className="product__card__container">
        <img src={imageUrl} alt={`image of ${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <CustomButton buttonType={BUTTON_TYPE_CLASSES.inverted}>
          Add to cart
        </CustomButton>
      </div>
    </Fragment>
  );
};

export default ProductCard;
