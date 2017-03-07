import React, { Component } from 'react';
import BoardColumn from './BoardColumn';

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {newColumnName: ''};

    this.handleChange = this.handleChange.bind(this);
    this.createNewColumn = this.createNewColumn.bind(this);
    this.inputListener = this.inputListener.bind(this);
    this.boards = this.boards.bind(this);
  }

  handleChange(columnId, storyId) {
    alert('TODO: Board handle change');
  }

  createNewColumn() {
    this.props.onChange(this.state.newColumnName);
  }

  inputListener(e) {
    this.setState({newColumnName: e.target.value});
  }

  boards() {
    const components = this.props.boardColumns.map((board) =>
      <BoardColumn key={board.id.toString()}
                   boardData={board}
                   onChange={this.handleChange}/>
    );

    return(components);
  }

  render() {
    return(
      <div>
        <div className='row'>
          <div className='col-lg-12 well'>
            <form onSubmit={this.createNewColumn}>
              <input type='text'
                     onChange={this.inputListener}
                     placeholder='New board column name'
                     className='form-control'/>

              <input type='submit'
                     className='btn btn-danger btn-block'/>
            </form>
          </div>
        </div>

        <div className='row'>{this.boards()}</div>
      </div>
    );
  }
}
