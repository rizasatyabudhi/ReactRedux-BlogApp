import React, { Component } from 'react';
import { Field, reduxForm } from 'react-redux';

class PostsNew extends Component {
  renderTitleField(field) {
    return (
      <div>
        <input
          type="text"
        // This is the pre-generated event handler
          {...field.input}
        />
      </div>

    );
  }

  render() {
    return (
      <form>
        {/* Field is used to represent a distinct input that will be visible on the screen*/}
        <Field
        // Name of the field (ex: Title, Author, Address)
          name="title"
          component={this.renderTitleField}
        />
      </form>
    );
  }
}

// This is simlar to connect function in redux
// This is to connect our form with our reducer
export default reduxForm({
  // Must be unique, this will be the name for THIS PARTICULAR FORM
  form: 'PostsNewForm',
})(PostsNew);
