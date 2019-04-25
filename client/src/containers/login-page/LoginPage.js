import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

class LoginPage extends React.Component {
  renderField = ({
    input, label, type, meta: { touched, error }
  }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched && (error && <span>{error}</span>)}
        </div>
      </div>
    )

  render() {
    return (
      <Col>
        <h3>Login Page</h3>

        <form>
          <Field
            name="email"
            type="email"
            component={this.renderField}
            label="User Email"
          />
          <Field
            name="password"
            type="password"
            component={this.renderField}
            label="Password"
          />
          <button type="submit">Login</button>
        </form>

        <Link to="/register">Register</Link>
      </Col>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
}

export default reduxForm({
  form: 'loginPage',
  validate,
})(LoginPage);