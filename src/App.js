import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div container='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
