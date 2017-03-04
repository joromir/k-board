import React, { Component } from 'react';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import AppHeader from './AppHeader'
import Board from './Board'

export default class App extends Component {
  render() {
    var boards = [
      {id: 1, name: 'Tomorrow'},
      {id: 2, name: 'Today'},
      {id: 3, name: 'Completed'},
      {id: 4, name: 'Archive'}
    ];

    return (
      <div className="App">
        <Board boardColumns={boards}/>
      </div>
    );
  }
}
