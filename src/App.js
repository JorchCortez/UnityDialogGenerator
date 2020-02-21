import React, { Component } from 'react';
import Dialog from './components/dialog';
import Nav from './components/nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Dialog />
      </div>
    );
  }
}

export default App;
