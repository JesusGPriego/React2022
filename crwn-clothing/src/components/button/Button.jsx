import './button.styles.scss';
const BUTTON_CLASS_TYPE = {
  google: 'google__sign__in',
  inverted: 'inverted',
};

const CustomButton = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button__container ${BUTTON_CLASS_TYPE[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
