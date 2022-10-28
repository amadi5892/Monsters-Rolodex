import { Component } from 'react';

import CardList from './components/card-list/card-list.component'
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
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField};
    })

  }
  render() {
    console.log('render');

    const { monsters, searchField} = this.state;
    const { onSearchChange } = this; 
    // [ { name: 'Leanne' }, {name: 'Yihua'} ]
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input classname='search-box' type='search' placeholder='search monster' onChange={onSearchChange} />
        {/*{
          filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        }*/}
        <CardList />
      </div>
    );
  }
  
}

export default App;
