import React, { Component } from 'react'
import TrashedBoardStory from './TrashedBoardStory'

export default class TrashedStories extends Component {
  constructor(props) {
    super(props)

    this.trashedStories = this.trashedStories.bind(this);
    this.showTrash = this.showTrash.bind(this);
    this.handleStoryChange = this.handleStoryChange.bind(this);
    this.determineButton = this.determineButton.bind(this);
    this.trashedStoriesRaw = this.trashedStoriesRaw.bind(this);

    this.state = {trashVisible: false};
  }

  trashedStoriesRaw() {
    const trash = this.props.stories.filter((story) => story.trash === true);

    return(trash);
  }

  trashedStories() {
    const trashComponents = this.trashedStoriesRaw().map((story) =>
      <TrashedBoardStory key={story.id.toString()}
                         story={story}
                         onChange={this.handleStoryChange}/>)

    return(
      <div className="list-inline">
        {trashComponents}
      </div>
    );
  }

  handleStoryChange(storyId) {
    this.props.onChange(storyId);
  }

  showTrash() {
    this.setState((prevState, props) => ({
      trashVisible: !prevState.trashVisible
    }));
  }

  determineButton() {
    var trashedItemsLength = this.props.stories.filter((story) => story.trash === true).length;

    var klass = 'btn btn-danger';

    return(
      <button className={trashedItemsLength === 0 ? klass + ' disabled' : klass}
              onClick={this.showTrash}>

        <span className="badge">{trashedItemsLength}</span> Trash
      </button>
    );
  }

  render() {
    return(
      <div>
         {this.determineButton()}
         {this.state.trashVisible && this.trashedStories()}
      </div>
    );
  }
}
