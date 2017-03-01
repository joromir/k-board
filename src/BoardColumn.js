import React, { Component } from 'react';
import BoardStory from './BoardStory'

export default class BoardColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
    };

    this.changeState = this.changeState.bind(this);
    this.handleStoryChange = this.handleStoryChange.bind(this);
    this.trashedStories = this.trashedStories.bind(this);
    this.boardStories = this.boardStories.bind(this);
  }

  changeState() {
    this.setState({
      hidden: true
    });
  }

  handleStoryChange(value) {
    alert('TODO: handleStoryChange');
  }

  trashedStories() {
    return(this.props.stories.filter((story) => story.trash === true).map((story) =>
      <BoardStory
        key={story.id.toString()}
        story={story}
        onChange={this.handleStoryChange}/>
    ));
  }

  boardStories() {
    return(this.props.stories.filter((story) => story.trash === false).map((story) =>
      <BoardStory
        key={story.id.toString()}
        story={story}
        onChange={this.handleStoryChange}/>
    ));
  }

  render() {
    const content = <div className='col-lg-2'>
      <div className="BoardColumn thumbnail">
        <div className='well'>
          <h4 className='display-4'>{this.props.boardName}</h4>
          <a onClick={this.changeState} className='btn btn-danger btn-xs'>delete</a>
        </div>

        <div className="list-inline">{this.boardStories()}</div>
        <hr />

        <h5>Trash</h5>
        <div className="list-inline">{this.trashedStories()}</div>
      </div>
    </div>

    return(!this.state.hidden && content);
  }
}
