import React, { Component } from 'react'
import TrashedBoardStory from './TrashedBoardStory'

export default class TrashedStories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trashVisible: false
    };

    this.trashedStories = this.trashedStories.bind(this);
    this.showTrash = this.showTrash.bind(this);
  }

  trashedStories() {
    const trash = this.props.stories.filter((story) =>
      story.trash === true
    );

    const trashComponents = trash.map((story) =>
      <TrashedBoardStory key={story.id.toString()}
                         story={story}
                         onChange={this.handleStoryChange}/>)

    return(
      <div className="list-inline">
        {trashComponents}
      </div>
    );
  }

  showTrash() {
    this.setState((prevState, props) => ({
      trashVisible: !prevState.trashVisible
    }));
  }

  render() {
    return(
      <div>
        <button className='btn btn-danger' onClick={this.showTrash}>Trash</button>

         {this.state.trashVisible && this.trashedStories()}
      </div>
    );
  }
}
