import './formInput.style.scss';
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className={'group'}>
      <input {...otherProps} className="form__input"></input>
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form__input__label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
