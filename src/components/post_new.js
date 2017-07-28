import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderField(field) {
  // The field argument is the one that connecting the data inside our renderField function
  // With the <Field> in our render( )
  // If we pass argument to the renderField(field) function, it will automatically be available
  // To the <Field> component

  // Destructuring, So we don't have to type field.meta.touched or field.meta.error
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className} >
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
        // This is the pre-generated event handler, so the <input> tag we created
        // Doesn't have to specify all the event handler like onChange={field.input.onChange} , etc
          {...field.input}
        />
        {/* terniary operation.
        If the statement left of the ? is true, then execute the first option, else exec the second option
        */}
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    // We take { handleSubmit } from the redux
    // We can do that because we already connect redux form with redux, so we get a ton of additional properties
    // By using reduxForm(), similar to connect() function
    const { handleSubmit } = this.props;
    return (
      // When the user submit the form, firs the reduxForm wide will run (which is the handleSubmit)
      // if the form has been validated by the handleSubmit, then we call the onSubmit function that we create
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
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
