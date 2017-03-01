import React, { Component } from 'react';
import BoardColumn from './BoardColumn';

export default class Board extends Component {
  render() {
    // TODO: Extract data;
    const boardColumns = [
      {
        id: 1,
        name: 'To do',
        stories: [
          {id: 1, title: 'Wash dishes', trash: false},
          {id: 2, title: 'Do the laundry', trash: false},
          {id: 3, title: 'Do your homework', trash: false},
          {id: 4, title: 'Buy wine', trash: true}
        ]
      },
      {
        id: 2,
        name: 'Today',
        stories: [
          {id: 1, title: 'Buy notebooks', trash: false},
          {id: 2, title: 'Wash the car', trash: true},
          {id: 3, title: 'Buy new charger for the phone', trash: false},
          {id: 4, title: 'Dust off the furniture', trash: true}
        ]
      },
      {
        id: 3,
        name: 'Completed',
        stories: [
          {id: 1, title: 'Water the flowers', trash: false},
          {id: 2, title: 'Pay the bills', trash: false},
        ]
      }
    ];

    const boards = boardColumns.map((board) =>
      <BoardColumn
        key={board.id.toString()}
        boardName={board.name}
        stories={board.stories}/>
    );

    return(
      <div className='row'>
        {boards}
      </div>
    );
  }
}
