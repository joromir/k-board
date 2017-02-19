import React, { Component } from 'react';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import AppHeader from './AppHeader'
import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Board />
      </div>
    );
  }
}

export default App;
