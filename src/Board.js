import React, { Component } from 'react';
import BoardColumn from './BoardColumn';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    // TODO: Extract data
    this.state = {
      boardColumns:[
      {id: 1, name: 'Tomorrow'},
      {id: 2, name: 'Today'},
      {id: 3, name: 'Completed'}
    ]}
  }

  handleChange(columnId, storyId) {
    function updatedColumns(columns) {
      let targetColumn = columns.filter((boardColumn) =>
        boardColumn.id === columnId
      )[0];
      
      let targetStory = targetColumn.stories.filter((story) =>
        story.id === storyId
      )[0];

      // {title: targetStory.title, id: storyId, trash: true}
    }

    this.setState((prevState, props) =>
      {boardColumns: updatedColumns(prevState.boardColumns)}
    );
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
