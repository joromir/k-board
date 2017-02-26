import React, { Component } from 'react';

class BoardStory extends Component {
  render() {
    return(
      <li>({this.props.story.id}) {this.props.story.title}</li>
    );
  }
}

export default BoardStory;
