import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {  // 1st to run --> initializes state and its intial value
    super()  
    this.state = {
      monsters: [],
      searchField: ''
    }
    // console.log('Constructor');
  }


  componentDidMount() { // runs 3rd --> the moment the component mounts (from render) the code inside this lifecycle method runs hence the name "component did mount"
      // console.log('Component Did Mount')
      fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => this.setState(() => {
              return {monsters: users}
            },
              () => {
                // console.log(this.state);
              }
            ));
  }



  render() {  // Runs 2nd --> deterimines what to show (to the screen) --> renders the initial UI of this component
              // Runs 4th --> now that component did mount ran (state has changed due to setState()) --> render method runs again.
    // console.log('Render method')

    const filteredMonsters = this.state.monsters.filter((monster) => { // <-- filter() gives back a new array, so the original array (in state above) is not modified
      return monster.name.toLowerCase().includes(this.state.searchField); // <-- returns to me the monster name in lowercase and check if its included in the new array. 
    });

    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='Search Monsters' 
          onChange={(event) => 
          {
            // console.log(event.target.value);
            // console.log({startingArray: this.state.monsters})
            const searchField = event.target.value.toLowerCase(); // <-- event.target.value refers to the input I type into the search string
            // const filteredMonsters = this.state.monsters.filter((monster) => { // <-- filter() gives back a new array, so the original array (in state above) is not modified
            //   return monster.name.toLowerCase().includes(searchString); // <-- returns to me the monster name in lowercase and check if its included in the new array. 
            // });

            this.setState(() => {
              return { searchField };
            }, () => {
              // console.log({EndingArray: this.state.monsters})
            })
          }}/>


        { // Map creates a returns a new array + also each child needs a key prop
          filteredMonsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1><h2>{monster.email}</h2></div>
          })
        }
      </div>
    );
  }
}

export default App;

