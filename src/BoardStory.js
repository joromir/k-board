import React, { Component } from 'react';

export default class BoardStory extends Component {
  constructor(props) {
    super(props);

    this.markAsTrash = this.markAsTrash.bind(this);
  }

  markAsTrash(e) {
    alert('TODO: Should be marked as trash');
  }

  render() {
    const presentStory = <div>
      <a href='#' className="list-group-item">
        {this.props.story.title}<br />
        <a onClick={this.markAsTrash} className='btn btn-danger btn-xs'>Trash</a>
      </a>
    </div>

    return(presentStory);
  }
}
