import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

// when you're component isn't showing up, check that you've included it in the app render.
// app level component is an ideal place to store state. Props can be sent down to multiple children components.

class App extends Component {
  state = {
    users: [],
    loading: false //handling the time it takes the data to load
  }
  // lifecycle method
  async componentDidMount() {
    this.setState({ loading: true });
    //res houses the response object from the get response
    //the data is contained in res.data
    const res = await axios.get('https://api.github.com/users');
    console.log(res.data);
    //setting users to the loaded data
    this.setState({users: res.data, loading: false});
  }

  render() {

    return (
      <div className="app">
        {/* A component renders as a customized jsx tag. You can pass data as props to children components.
        Or you can set prop defaults on the child level. Parent props overrides default props on child level*/}
        <Navbar title="GitHub Finder"/>
        <div className="container">
          {/* pass in data you got in state as props */}
          <Users loading={this.state.loading} users={this.state.users} />
        </div>

      </div>
    );
  }
}

export default App

