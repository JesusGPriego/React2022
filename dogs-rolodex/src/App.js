import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/cardList/CardList';
import SearchBox from './components/searchBox/SearchBox';

function App() {
  // we destructure the value and the function that will set (setter function) the state value. What's set as parameter is the initial value of the sate
  const [searchValue, setsearchValue] /* [value, setValue] */ = useState('');

  const [listElements, setListElements] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setListElements(json))
      .catch(error => console.log(error));
  }, []);

  const searchHandler = e => {
    e.preventDefault();
    const searchFieldValue = e.target.value;
    setsearchValue(searchFieldValue);
  };

  return (
    <div className="App">
      <h1 className="app_title">Dogs rolodex</h1>
      <SearchBox
        onChangeHandler={searchHandler}
        className={'search_box--monster'}
        placeHolder={'Search doggo'}
      />
      <CardList listElements={listElements} searchValue={searchValue} />
    </div>
  );
}

export default App;
