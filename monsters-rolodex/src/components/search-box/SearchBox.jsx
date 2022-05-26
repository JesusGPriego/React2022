import { Component } from 'react';
import './searchBox.styles.css';
class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeHolder, className } = this.props;
    return (
      <input
        className={`search_box ${className}`}
        type="search"
        placeholder={placeHolder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
