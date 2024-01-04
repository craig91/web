import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        { // Map creates a returns a new array + also each child needs a key prop
          this.state.monsters.map((monster) => {
            return <div key={monster.id} ><h1>{monster.name}</h1></div>
          })
        }
      </div>
    );
  }
}

export default App;

