import React, { Component } from 'react'
import BoardStory from './BoardStory'

export default class ColumnActiveStories extends Component {
  constructor(props) {
    super(props);

    this.boardStories = this.boardStories.bind(this);
    this.handleStoryChange = this.handleStoryChange.bind(this);
  }

  handleStoryChange(storyId) {
    this.props.onChange(storyId);
  }

  boardStories() {
    const stories = this.props.stories.filter((story) => story.trash === false)

    return(stories.map((story) =>
      <BoardStory key={story.id.toString()}
                  story={story}
                  onChange={this.handleStoryChange}/>));
  }

  render() {
    return(
      <div className="list-inline">
        {this.boardStories()}
      </div>
    );
  }
}
