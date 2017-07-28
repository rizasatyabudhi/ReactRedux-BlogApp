import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {


  renderField(field) {
  // The field argument is the one that connecting the data inside our renderField function
  // With the <Field> in our render( )
  // If we pass argument to the renderField(field) function, it will automatically be available
  // To the <Field> component
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
        // This is the pre-generated event handler, so the <input> tag we created
        // Doesn't have to specify all the event handler like onChange={field.input.onChange} , etc
          {...field.input}
        />
        {field.meta.errors}
      </div>
    );
  }


  render() {
    return (
      <form>
        <Field
          label="Title for Post"
        // Name of the field (ex: Title, Author, Address)
        // name property must be identical with the one in the validation
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  // So we first create an empty object called "errors"
  // If there is an error, then the "errors" object will be filled
  const errors = {};
  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that at least 3 character!';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories!';
  }
  if (!values.content) {
    errors.content = 'Enter some content please!';
  }

  // If errors is empty , the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}


// This is simlar to connect function in redux
// This is to connect our form with our reducer
export default reduxForm({
  validate,
  // Must be unique, this will be the name for THIS PARTICULAR FORM
  form: 'PostsNewForm',
})(PostsNew);
