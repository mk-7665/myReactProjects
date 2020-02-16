import React, { Component, Fragment } from 'react';
import './App.css';

// using a class-based React component. To render or return anything, the function has to be called render()

class App extends Component {
// all renders must be wrapped in one parent element, such as div
// But what if you don't want your render to be inside a div? You can wrap it inside a React Fragment element
  render(){
    return (
      <Fragment>
        <h1>I'm a fragment</h1>
        <h2>I'm a fragment too</h2>
        <h3>We have no parent div</h3>
        <p>React.Fragment allows us to do that</p>
        <p>I love React!</p>
      </Fragment>

      
    );
  }

}

export default App;
