import React, { Component } from 'react';
import Dialog from './components/dialog';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Dialog />
        </p>
      </div>
    );
  }
}

export default App;