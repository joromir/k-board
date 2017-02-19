import React, { Component } from 'react';
import BoardStory from './BoardStory'

class BoardColumn extends Component {
  render() {
    return(
      <div className="BoardColumn">
        <h1 className={this.props.columnStyle}>{ this.props.boardName }</h1>
        <ul>
          <BoardStory title='Lorem Ipsum' />
          <BoardStory title='Ipsum Lorem' />
          <BoardStory title='Ala Bala' />
          <BoardStory title='Bala Ala' />
        </ul>
      </div>
    );
  }
}

export default BoardColumn;
