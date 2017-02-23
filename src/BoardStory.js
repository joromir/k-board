import React, { Component } from 'react';

class BoardStory extends Component {
  constructor(props) {
    super(props);
    this.state = { position: 1 };
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentWillUnmount() {
    console.log('unmounted');
  }

  render() {
    return(
      <li>{this.state.position} {this.props.title}</li>
    );
  }
}

export default BoardStory;
