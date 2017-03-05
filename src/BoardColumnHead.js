import React, { Component } from 'react'

export default class BoardColumnHead extends Component {
  constructor(props) {
    super(props);

    this.changeState = this.changeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewStory = this.addNewStory.bind(this);
  }

  changeState() {
    this.props.onHide();
  }

  handleSubmit(event) {
    this.props.onSubmit(event);
  }

  addNewStory(event) {
    this.props.onChange(event);
  }

  render() {
    return(
      <div className='well'>
        <h4 className='display-4'>{this.props.boardName}</h4>

        <a onClick={this.changeState} className='btn btn-danger btn-xs btn-block'>
          delete column
        </a>

        <form onSubmit={this.handleSubmit}>
          <label>
            Add new:
            <input type='text'
                   placeholder='new story'
                   className='form-control'
                   onChange={this.addNewStory}/>
          </label>
          <input type='submit' value='Submit' className='btn btn-info btn-xs btn-block'/>
        </form>
      </div>
    );
  }
}
