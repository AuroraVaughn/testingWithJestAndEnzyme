import React, { Component } from 'react';
import CommentBox from './CommentBox'
import CommentList from './CommentList'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hi there!
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default App;
