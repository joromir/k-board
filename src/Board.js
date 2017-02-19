import React, { Component } from 'react';
import BoardColumn from './BoardColumn';

class Board extends Component {
  render() {
    return(
      <table>
        <tr>
          <td><BoardColumn boardName='Brainstorming' columnStyle='alert alert-info'/></td>
          <td><BoardColumn boardName='Pending' columnStyle='alert alert-warning'/></td>
          <td><BoardColumn boardName='In Progress' columnStyle='alert alert-danger'/></td>
          <td><BoardColumn boardName='Completed' columnStyle='alert alert-success'/></td>
        </tr>
      </table>
    );
  }
}

export default Board;
