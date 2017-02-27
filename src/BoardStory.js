import React, { Component } from 'react';

export default class BoardStory extends Component {
  constructor(props) {
    super(props);
    this.state = {trash: false};

    this.markAsTrash = this.markAsTrash.bind(this);
  }

  markAsTrash() {
    this.setState({trash: true});
  }

  render() {
    const presentStory = <a href='#' className="list-group-item">
      <a onClick={this.markAsTrash} className='btn btn-danger btn-xs'>delete</a>
      {this.props.story.title}
    </a>

    if(this.state.trash) {
      return(null);
    } else {
      return(presentStory);
    }
  }
}
