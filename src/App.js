import React, { Component } from 'react';
import Dialog from './components/dialog'; 
import Characters from './components/characters';
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
              <li>
                <Link className="nav-item" to="/Moods">Manage moods</Link>
              </li>
            </div> 
            <Switch>
              <Route path="/">
                <Dialog />
              </Route>
              <Route path="/Characters">
                <Characters />
              </Route>
            </Switch> 
        </Router>
      </div>
    );
  }
}

export default App;

