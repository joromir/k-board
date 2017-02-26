import React, { Component } from 'react';

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};

    this.close = this.close.bind(this);
  }

  close() {
    this.setState(prevState => ({clicked: !prevState.clicked}));
  }

  render() {
    return(
      <h2 onClick={this.close}>{this.state.clicked ? 'KanbanBoard' : 'K-Board'}</h2>
    );
  }
}
