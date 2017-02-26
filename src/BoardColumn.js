import React, { Component } from 'react';
import BoardStory from './BoardStory'

export default class BoardColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {hidden: false};
    this.change_state = this.change_state.bind(this);
  }

  change_state() {
    this.setState({
      hidden: true
    });
  }

  render() {
    const stories = [
      { id: 1, title: 'Wash dishes' },
      { id: 2, title: 'Do the laundry' },
      { id: 3, title: 'Do your homework' },
      { id: 4, title: 'Buy wine' }
    ];

    const boardStories = stories.map((story) =>
      <BoardStory key={story.id.toString()} story={story} />
    );

    return(
      <div className="BoardColumn">
        { !this.state.hidden &&
          <div>
            <h1 className='alert alert-warning'>{this.props.boardName}</h1>
            <p onClick={this.change_state}>хиксче</p>

            <ul>{boardStories}</ul>
          </div>
        }
      </div>
    );
  }
}
