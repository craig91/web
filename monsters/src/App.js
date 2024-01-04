import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: 1
        },
        {
          name: 'Frank',
          id: 2
        },
        {
          name: 'Jacky',
          id: 3
        },
        {
          name: 'Craig',
          id: 4
        }
      ]
     
    }
  }
  render() {
    return (
      <div className="App">
        { // Map creates a returns a new array + also each child needs a key prop
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id} >{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;

