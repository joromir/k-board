import React, { Component } from 'react';
import BoardColumn from './BoardColumn';

class Board extends Component {
  render() {
    return(
      <table>
        <tr>
          <td><BoardColumn boardName='Brainstorming' /></td>
          <td><BoardColumn boardName='Pending' /></td>
          <td><BoardColumn boardName='In Progress' /></td>
          <td><BoardColumn boardName='Completed' /></td>
        </tr>
      </table>
    );
  }
}

export default Board;
