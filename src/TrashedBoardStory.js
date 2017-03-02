import React, { Component } from 'react'

export default class TrashedBoardStory extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onChange(this.props.story.id);
  }

  render() {
    return <div>
      {this.props.story.title}
      <a className='btn btn-info btn-xs' onClick={this.handleChange}>Restore</a>
    </div>;
  }
}
