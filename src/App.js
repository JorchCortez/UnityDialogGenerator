import React, { Component } from 'react';
import Dialog from './components/dialog'; 
import CharacterList from './components/character-list.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Router> 
            <div className="nav-bar">
              <li>
                <Link className="nav-item" to="/">New Conversation</Link>
              </li>
              <li>
                <Link className="nav-item" to="/Characters">Manage Characters</Link>
              </li>
            </div> 
            <Switch>
              <Route path="/Characters">
                <CharacterList />
              </Route>
              <Route path="/">
                <Dialog />
              </Route>
            </Switch> 
        </Router>
      </div>
    );
  }
}

export default App;

