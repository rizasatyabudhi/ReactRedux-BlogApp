import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions/index';

class PostShow extends Component {
  componentDidMount() {
    // Destructuring => take "id" from this.props.match.params and make it a variable
    // this.props.match.params is provided by the react router
    // it takes the wild card (:id) from the url
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    // We use match.params because it will always available from the start
    // if we use this.props.posts.id, it might not be available yet when the component is rendered
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
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
        <Link to="/" className="btn btn-primary"> Go Back </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
        Delete Post
        </button>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
