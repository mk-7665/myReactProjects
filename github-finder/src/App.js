import React, { Component, Fragment } from 'react';
import './App.css';

// using a class-based React component. To render or return anything, the function has to be called render()


class App extends Component {
  // you can add variables from methods within this class
  message = () => 'Take me to your leader!';

  render() {
    //or you can add variables for render within the render method
    const name = 'Jane Doe';
    const showName = true;
    const loading = false;
    const foo = () => 'Bar Bazz';
    
    // the { } can support any javascript expression within it, even rendering whole functions.
    // Most common expression: the ternary operator-- variable ? true : false
    return (
      <div className="app">
        <h2>{foo()}</h2>
        {/* The && is an "and" conditional. It will only show name if showName is true and
        previous condition, loading is false, is satisfied. */}

        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>} 

        {/* Because of scoping, message() doesn't work. Message sits outside of render().
        You have to invoke this */}
        <h3>{this.message()}</h3>
      </div>
    );
  }
}

export default App

