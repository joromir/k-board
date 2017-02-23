import React, { Component } from 'react';
import BoardStory from './BoardStory'

class BoardColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {hidden: false};
    this.change_state = this.change_state.bind(this);
  }

  change_state() {
    this.setState({
      hidden: true
    });
  }

  render() {
    return(
      <div className="BoardColumn">
        { !this.state.hidden &&
          <div>
            <h1 className={this.props.columnStyle}>{ this.props.boardName }</h1>
            <p onClick={this.change_state}>[delete]</p>
            <ul>
              <BoardStory title='Lorem Ipsum' />
              <BoardStory title='Ipsum Lorem' />
              <BoardStory title='Ala Bala' />
              <BoardStory title='Bala Ala' />
            </ul>
          </div>
        }
      </div>
    );
  }
}

export default BoardColumn;
