import React, { Component } from 'react';
import './App.css';
import BoardColumn from './BoardColumn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>K-Board</h2>
        </div>

        <BoardColumn />
      </div>
    );
  }
}

export default App;
