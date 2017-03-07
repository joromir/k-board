import React, { Component } from 'react'

export default class BoardColumnForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formHidden: true
    };

    this.changeState = this.changeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewStory = this.addNewStory.bind(this);
    this.showform = this.showform.bind(this);
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

  showform() {
    this.setState((prevState, props) =>({
      formHidden: !prevState.formHidden
    }));
  }

  render() {
    const form = <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Add new user story:
          <input type='text'
                 placeholder='new story'
                 className='form-control'
                 onChange={this.addNewStory}
                 required />
        </label>

        <input type='submit'
               value='create user story'
               className='btn btn-info btn-xs btn-block'/>
      </form>

      <a onClick={this.changeState} className='btn btn-danger btn-xs btn-block'>
        delete column
      </a>
    </div>

    return(
      <div>
        <a className='btn btn-info btn-block' onClick={this.showform}>
          New user story
        </a>
        {!this.state.formHidden && form}
      </div>
    );
  }
}
