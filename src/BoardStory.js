import React, { Component } from 'react';

export default class BoardStory extends Component {
  render() {
    return(
      <li>({this.props.story.id}) {this.props.story.title}</li>
    );
  }
}
