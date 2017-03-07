import React, { Component } from 'react';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import AppHeader from './AppHeader'
import Board from './Board'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardColumns: [
        {id: 1, name: 'Tomorrow'},
        {id: 2, name: 'Today'},
        {id: 3, name: 'Completed'},
        {id: 4, name: 'Archive'}
      ]
    };

    this.addNewColumn = this.addNewColumn.bind(this);
  }

  addNewColumn(colName) {
    // TODO
    this.setState((prevState, props) => ({
      boardColumns: prevState.boardColumns.push({id: 12, name: 'Urgent'})
    }));
  }

  render() {
    return (
      <div className="App">
        <Board boardColumns={this.state.boardColumns}
               onChange={this.addNewColumn}/>
      </div>
    );
  }
}
