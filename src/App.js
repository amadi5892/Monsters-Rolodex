import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
    monsters: [],
    searchField: '',
  };
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }
    ));
}
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField};
    })

  }
  render() {

    const { monsters, searchField} = this.state;
    const { onSearchChange } = this; 
    // [ { name: 'Leanne' }, {name: 'Yihua'} ]
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        {/*{
          filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        }*/}
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monster' classname='search-box' />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
