import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
    monsters: [],
    searchField: '',
  };
  console.log('constructor');
}

componentDidMount() {
  console.log('componentDidMount');
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    },
    () => {
      console.log(this.state);
    }
    ));
}

  render() {
    console.log('render');

    // [ { name: 'Leanne' }, {name: 'Yihua'} ]
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input classname='search-box' type='search' placeholder='search monster' onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase();
          

          this.setState(() => {
            return { searchField};
          })

        }} />
        {
          filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        }
      </div>
    );
  }
  
}

export default App;
