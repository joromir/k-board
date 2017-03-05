import React, { Component } from 'react'
import BoardStory from './BoardStory'

export default class ColumnActiveStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.boardStories = this.boardStories.bind(this);
    this.handleStoryChange = this.handleStoryChange.bind(this);
    this.hideActiveStories = this.hideActiveStories.bind(this);
  }

  handleStoryChange(storyId) {
    this.props.onChange(storyId);
  }

  boardStories() {
    const storyComponents = this.props.stories.map((story) =>
      <BoardStory key={story.id.toString()}
                  story={story}
                  onChange={this.handleStoryChange}/>)

    return(
      <div className="list-inline">
        {storyComponents}
      </div>
    );
  }

  hideActiveStories() {
    this.setState((prevState, props) => ({
      visible: !prevState.visible
    }));
  }

  render() {
    var klass = 'btn btn-info btn-block'

    return(
      <div>
        <a className={this.props.stories.length !== 0 ? klass : klass + ' disabled'}
           onClick={this.hideActiveStories}>

          <span className="badge">{this.props.stories.length}</span> Active
        </a>
        {this.state.visible && this.boardStories()}
      </div>
    );
  }
}
