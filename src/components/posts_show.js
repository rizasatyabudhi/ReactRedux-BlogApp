import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostShow extends Component {
  componentDidMount() {
    // Destructuring => take "id" from this.props.match.params and make it a variable
    // this.props.match.params is provided by the react router
    // it takes the wild card (:id) from the url
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    // This is how to fix when you want to access property that not yet exist
    // because our component is FIRST rendered before we attempt to fetchPost,
    // so that time our property is not yet available, we have to wait first
    // after the property finally exists, execute the return ( ....... )
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories:{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}


function mapStateToProps({ posts }, ownProps) {
  // We use this, so when we want to call our post property,
  // we only deal with ONE particular post
  // so we can just use this.props.post , rather than this.props.posts[this.props.match.params.id]
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);
