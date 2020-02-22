import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

// using a class-based React component. To render or return anything, the function has to be called render()
// when you're component isn't showing up, check that you've included it in the app render.

class App extends Component {

  render() {

    return (
      <div className="app">
        {/* A component renders as a customized jsx tag. You can pass data as props to children components.
        Or you can set prop defaults on the child level. Parent props overrides default props on child level*/}
        <Navbar title="GitHub Finder"/>
        <div className="container">
          <Users />
        </div>

      </div>
    );
  }
}

export default App

