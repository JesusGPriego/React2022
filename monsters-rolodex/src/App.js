import { Component } from 'react';
import './App.css';
import Cardlist from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchTerm: '',
    };
  }

  // componentDidMount triggers only once, when the component is rendered for the first time.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json =>
        this.setState(() => {
          return { monsters: json };
        })
      )
      .catch(error => console.log(error));
  }

  onSearchChange = e => {
    this.setState(() => {
      return { searchTerm: e.target.value };
    });
  };

  render() {
    const { monsters, searchTerm } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchTerm);
    });
    return (
      <div className="App">
        <h1 className="app_title">Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeHolder={'Search monster'}
          className={'search_box--monster'}
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
