import React, { Component } from 'react';
import BoardStory from './BoardStory'
import TrashedStories from './TrashedStories'
import ColumnActiveStories from './ColumnActiveStories'

export default class BoardColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
      stories: [
        {id: 1, title: 'Buy notebooks', trash: false},
        {id: 2, title: 'Wash the car', trash: true},
        {id: 3, title: 'Buy new charger for the phone', trash: false},
        {id: 4, title: 'Dust off the furniture', trash: true}
      ] 
    };
    this.changeState = this.changeState.bind(this);
    this.refreshStories = this.refreshStories.bind(this);
    this.markStoryAsTrash = this.markStoryAsTrash.bind(this);
  }

  changeState() {
    this.setState({hidden: true});
  }

  markStoryAsTrash(prevState, storyId) {
    prevState.stories.map(function(story) {
      if(story.id === storyId){
        story.trash = true
      }
        return story;
    });
  }

  refreshStories(storyId) {
    this.setState((prevState, props) =>
      {stories: this.markStoryAsTrash(prevState, storyId)}
    );
  }

  render() {
    const content = <div className='col-lg-2'>
      <div className="BoardColumn thumbnail">
        <div className='well'>
          <h4 className='display-4'>{this.props.boardName}</h4>
        </div>
        <a onClick={this.changeState} className='btn btn-danger btn-xs'>delete</a>

        <ColumnActiveStories stories={this.state.stories} onChange={this.refreshStories}/>
        <hr />
        <TrashedStories stories={this.state.stories}/>
      </div>
    </div>

    return(!this.state.hidden && content);
  }
}
