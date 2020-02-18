import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';

// using a class-based React component. To render or return anything, the function has to be called render()


class App extends Component {

  render() {
    //const numbers = [1,2,3,4];

    return (
      <div className="app">
        {/* A component renders as a customized jsx tag. You can pass data as props to children components.
        Or you can set prop defaults on the child level. Parent props overrides default props on child level*/}
        <Navbar title="GitHub Finder"/>
      </div>
    );
  }
}

export default App

