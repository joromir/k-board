import React, { Component } from 'react';
import BoardColumn from './BoardColumn';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    // TODO: Extract data
    this.state = {
      boardColumns:[
      {
        id: 1,
        name: 'Tomorrow',
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
    ]}
  }

  handleChange(columnId, storyId) {
    // TODO: refactor yucky method;
    const targetColumn = this.state.boardColumns.filter((column) =>
      column.id.toString() === columnId.toString()
    )[0];

    const targetStory = targetColumn.stories.filter((story) =>
      story.id === storyId
    )[0];

    const newColumn = {
      ...targetColumn,
      ...{stories: [{id: storyId * 10, title: targetStory.title, trash: true}]}
    }

    this.setState({ boardColumns: this.state.boardColumns.concat([newColumn])})
  }

  render() {
    const boards = this.state.boardColumns.map((board) =>
      <BoardColumn
        key={board.id.toString()}
        columnId={board.id}
        boardName={board.name}
        stories={board.stories}
        onChange={this.handleChange}/>
    );

    return(
      <div className='row'>
        {boards}
      </div>
    );
  }
}
