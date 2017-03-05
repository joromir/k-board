import React, { Component } from 'react';
import BoardStory from './BoardStory'
import TrashedStories from './TrashedStories'
import ColumnActiveStories from './ColumnActiveStories'
import BoardColumnHead from './BoardColumnHead'

export default class BoardColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
      newStoryData: '',
      stories: [
        {id: 1, title: 'Buy notebooks', trash: false},
        {id: 2, title: 'Wash the car', trash: true},
        {id: 3, title: 'Buy new charger for the phone', trash: false},
        {id: 4, title: 'Dust off the furniture', trash: true}
      ] 
    };

    this.refreshStories = this.refreshStories.bind(this);
    this.markStoryAsTrash = this.markStoryAsTrash.bind(this);
    this.addNewStory = this.addNewStory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.appendNewStory = this.appendNewStory.bind(this);
    this.hideColumn = this.hideColumn.bind(this);
  }

  hideColumn() {
    this.setState({hidden: true});
  }

  markStoryAsTrash(prevState, storyId) {
    prevState.stories.map(function(story) {
      if(story.id === storyId){
        story.trash = !story.trash
      }
        return story;
    });
  }

  refreshStories(storyId) {
    this.setState((prevState, props) =>
      {stories: this.markStoryAsTrash(prevState, storyId)}
    );
  }

  addNewStory(event) {
    this.setState({
      newStoryData: event.target.value
    });
  }

  appendNewStory(stories) {
    var ids = this.state.stories.map((story) => story.id);

    var newStory = {
      id: (Math.max(...ids) + 1),
      title: this.state.newStoryData,
      trash: false
    };

    return(stories.push(newStory));
  }

  handleSubmit(event) {
    this.setState((prevState, props) => {
      stories: this.appendNewStory(prevState.stories)
    });

    event.preventDefault();
  }

  render() {
    const content = <div className='col-lg-2'>
      <div className="BoardColumn thumbnail">
        <BoardColumnHead boardName={this.props.boardData.name}
                         onSubmit={this.handleSubmit}
                         onChange={this.addNewStory}
                         onHide={this.hideColumn}/>

        <ColumnActiveStories stories={this.state.stories} onChange={this.refreshStories}/>
        <hr />
        <TrashedStories stories={this.state.stories} onChange={this.refreshStories}/>
      </div>
    </div>

    return(!this.state.hidden && content);
  }
}
