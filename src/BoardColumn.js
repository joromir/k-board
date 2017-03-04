import React, { Component } from 'react';
import BoardStory from './BoardStory'
import TrashedStories from './TrashedStories'
import ColumnActiveStories from './ColumnActiveStories'

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

    this.changeState = this.changeState.bind(this);
    this.refreshStories = this.refreshStories.bind(this);
    this.markStoryAsTrash = this.markStoryAsTrash.bind(this);
    this.addNewStory = this.addNewStory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.appendNewStory = this.appendNewStory.bind(this);
  }

  changeState() {
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
    // TODO: Find a better solution...
    this.setState((prevState, props) =>
      {stories: this.appendNewStory(prevState.stories)}
    );
    event.preventDefault();
  }

  render() {
    const content = <div className='col-lg-2'>
      <div className="BoardColumn thumbnail">
        <div className='well'>
          <h4 className='display-4'>{this.props.boardData.name}</h4>
          <a onClick={this.changeState} className='btn btn-danger btn-xs btn-block'>
            delete column
          </a>
          <form onSubmit={this.handleSubmit}>
            <label>
              Add new:
              <input type='text'
                     placeholder='new story'
                     className='form-control'
                     onChange={this.addNewStory}/>
            </label>
            <input type='submit' value='Submit' className='btn btn-info btn-xs btn-block'/>
          </form>
        </div>

        <ColumnActiveStories stories={this.state.stories} onChange={this.refreshStories}/>
        <hr />
        <TrashedStories stories={this.state.stories} onChange={this.refreshStories}/>
      </div>
    </div>

    return(!this.state.hidden && content);
  }
}
