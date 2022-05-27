import './searchBox.style.css';
const SearchBox = ({ className, placeHolder, onChangeHandler }) => {
  return (
    <input
      className={`search_box ${className}`}
      type="search"
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
