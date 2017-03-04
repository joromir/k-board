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
    return <a className="list-group-item">
      {this.props.story.title}<br />
      <a className='btn btn-info btn-block btn-xs' onClick={this.handleChange}>Restore</a>
    </a>;
  }
}
