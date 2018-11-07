import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mert', age: 23 },
      { name: 'Avcı', age: 25 }
    ],
    otherState : 'other value'
  }

  switchNameHandler = (newName) => {
    // console.log("function work yo!");
    // USE SETSTATE INSTEAD => this.state.persons[0].name = "Not Mert";
    this.setState({
      persons: [
        { name: newName, age: 51 },
        { name: 'Payne', age: 55 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    // console.log("function work yo!");
    // USE SETSTATE INSTEAD => this.state.persons[0].name = "Not Mert";
    this.setState({
      persons: [
        { name: 'Mert', age: 51 },
        { name: event.target.value, age: 55 }
      ]
    });
  }

  render() {
    const style = {
      backgroundCOlor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>First React App YO!</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Aragorn')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        {/* USE THE BIND NOT THE UPPER ONE, BIND ITS BETTER */}
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Leonidas')}
          changed={this.nameChangeHandler}>I love this yo!</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'First React App yo!'));
  }
}

export default App;
