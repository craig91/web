import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {  // 1st to run --> initializes state and its intial value
    super()  
    this.state = {
      monsters: [],
    }
    console.log('Constructor');
  }


  componentDidMount() { // runs 3rd --> the moment the component mounts (from render) the code inside this lifecycle method runs hence the name "component did mount"
      console.log('Component Did Mount')
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
  render() { // Runs 2nd --> deterimines what to show (to the screen) --> renders the initial UI of this component
              // Runs 4th --> now that component did mount ran (state has changed due to setState()) --> render method runs again.
    console.log('Render method')
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

