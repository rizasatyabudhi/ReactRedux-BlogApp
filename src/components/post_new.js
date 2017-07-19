import React, { Component } from 'react';
import { Field, reduxForm } from 'react-redux';

class PostsNew extends Component {
  render() {
    return (
     <form>
     {/* Field is used to represent a distinct input that will be visible on the screen*/}
      <Field
        name="title"
        component={}
      />
     </form> 
    );
  }
}

// This is simlar to connect function in redux
// This is to connect our form with our reducer
export default reduxForm({
  // Must be unique
  form: 'PostsNewForm'
})(PostsNew);
