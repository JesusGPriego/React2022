import './cartDropdown.styles.scss';
import CustomButton from '../button/Button';
const CartDropdown = () => {
  return (
    <div className={`cart__dropdown__container`}>
      <div className="cart__items">
        <CustomButton>Go To Checktout</CustomButton>
      </div>
    </div>
  );
};

export default CartDropdown;
