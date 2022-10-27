import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
    monsters: [
      {
        name: 'Linda',
        id: '09ee'
      },
      {
        name: 'Frank',
        id: '08ee'
      },
      {
        name: 'Jacky',
        id: '07ee'
      },
      {
        name: 'Siggy',
        id: '06ee'
      }
    ]
    
  }
}

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        }
      </div>
    );
  }
  
}

export default App;
