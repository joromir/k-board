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
      { id: 4, title: 'Buy wine'}
    ];

    const boardStories = stories.map((story) =>
      <BoardStory key={story.id.toString()} story={story} />
    );

    // const trashedStories = boardStories.filter((story) =>
    //   story
    // );

    const content = <div>
      <div className="BoardColumn thumbnail">
        <div className='well'>
          <a onClick={this.change_state} className='btn btn-danger btn-xs'>delete</a>
          <h4 className='display-4'>{this.props.boardName}</h4>
        </div>

        <div className="list-inline">{boardStories}</div>
{/*         <hr />

        <h5>Trash</h5>
        <ul className="list-inline">{trashedStories}</ul> */}
      </div>
    </div>

    return(!this.state.hidden && content);
  }
}
