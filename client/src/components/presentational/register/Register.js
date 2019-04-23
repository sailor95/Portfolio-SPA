import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <div>Register</div>
      <Link to="/login">Cancel</Link>
    </div>
  );
}

export default Register;