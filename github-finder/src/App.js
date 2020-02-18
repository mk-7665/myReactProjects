import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';

// using a class-based React component. To render or return anything, the function has to be called render()


class App extends Component {

  render() {
 
    return (
      <div className="app">
        {/* A component renders as a customized jsx tag. You can pass data as props to children components. */}
        <Navbar title="GitHub Finder" icon="fab fa-github"/>
      </div>
    );
  }
}

export default App

