import React, { Component } from 'react';
import Dialog from './components/dialog'; 
import CharacterList from './components/character-list.js';
import logo from './misc/imgs/cr_logo.png';
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
          
          <div className="siteContainer">
              <div className="navbar">
                <ul className="navbar-nav">
                <li className="logo">
                  <a href="#" className="nav-link">
                    <span className="link-text logo-text">name meee</span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fad"
                      data-icon="angle-double-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                    >
                      <g className="fa-group">
                        <path
                          fill="currentColor"
                          d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                          className="fa-secondary"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                          className="fa-primary"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="comments" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" >
                        <g className="fa-group">
                            <path fill="currentColor"
                                d="M208 352c-41 0-79.1-9.3-111.3-25-21.8 12.7-52.1 25-88.7 25a7.83 7.83 0 0 1-7.3-4.8 8 8 0 0 1 1.5-8.7c.3-.3 22.4-24.3 35.8-54.5-23.9-26.1-38-57.7-38-92C0 103.6 93.1 32 208 32s208 71.6 208 160-93.1 160-208 160z"
                                className="fa-secondary"></path>
                            <path fill="currentColor"
                                d="M576 320c0 34.3-14.1 66-38 92 13.4 30.3 35.5 54.2 35.8 54.5a8 8 0 0 1 1.5 8.7 7.88 7.88 0 0 1-7.3 4.8c-36.6 0-66.9-12.3-88.7-25-32.2 15.8-70.3 25-111.3 25-86.2 0-160.2-40.4-191.7-97.9A299.82 299.82 0 0 0 208 384c132.3 0 240-86.1 240-192a148.61 148.61 0 0 0-1.3-20.1C522.5 195.8 576 253.1 576 320z"
                                className="fa-primary"></path>
                        </g>
                    </svg> 
                    <span className="link-text">New Dialog</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Characters">
                      <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="address-book" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <g className="fa-group">
                          <path fill="currentColor"
                              d="M416 48a48 48 0 0 0-48-48H48A48 48 0 0 0 0 48v416a48 48 0 0 0 48 48h320a48 48 0 0 0 48-48zm-208 80a64 64 0 1 1-64 64 64.06 64.06 0 0 1 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H118.4C106 384 96 375.4 96 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5a103 103 0 0 0 79.6 0h5c37.1 0 67.2 25.8 67.2 57.6z"
                              className="fa-secondary"></path>
                          <path fill="currentColor"
                              d="M252.8 288h-5a103 103 0 0 1-79.6 0h-5c-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6zM208 256a64 64 0 1 0-64-64 64.06 64.06 0 0 0 64 64zm228-32h-20v64h20a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0 128h-20v64h20a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm0-256h-20v64h20a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12z"
                              className="fa-primary"></path>
                        </g>
                      </svg>
                      <span className="link-text">Characters</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.thecoderaccoons.com/" target="blank">
                    <img src={logo} ></img>
                    <span className="link-text">Made with <span className="heart">&#9829;</span> by TCR</span>
                    </a>

                  </li>
                </ul>
              </div>
              <Switch>
                  <Route path="/Characters">
                      <CharacterList />
                  </Route>
                  <Route path="/">
                      <Dialog />
                  </Route>
              </Switch>
          </div>
      </Router>
  </div>
    );
  }
}

export default App;

