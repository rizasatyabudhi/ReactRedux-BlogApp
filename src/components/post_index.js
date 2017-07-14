import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }
  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}


export default connect(null, { fetchPost })(PostIndex);
