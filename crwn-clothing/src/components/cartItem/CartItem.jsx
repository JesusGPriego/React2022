import { Fragment } from 'react';
import { Container, Image, Details, Name } from './cartItem.styles.jsx';
const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <Fragment>
      <Container>
        <Image src={imageUrl} alt={` ${name}`} />
        <Details>
          <Name>{`${name}, ${quantity}`}</Name>
          <span className="price">{`${quantity} x 
          ${price}€`}</span>
        </Details>
      </Container>
    </Fragment>
  );
};

export default CartItem;
