import React, { Component } from 'react';
import BoardColumn from './BoardColumn';

export default class Board extends Component {
  render() {
    const boardColumns = [
      {id: 1, name: 'Brainstorming'},
      {id: 2, name: 'Pending'},
      {id: 3, name: 'In Progress'},
      {id: 4, name: 'Completed'},
      {id: 5, name: 'Archive'},
    ];

    const boards = boardColumns.map((board) =>
      <td key={board.id.toString()} >
        <BoardColumn key={board.id.toString()} boardName={board.name}/>
      </td>
    );

    return(
      <table>
        <tbody>
          <tr>
            {boards}
          </tr>
        </tbody>
      </table>
    );
  }
}
