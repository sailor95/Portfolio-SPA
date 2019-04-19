import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import classes from './Navigationbar.module.css';

const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand>
          <Link to="/" className={classes.Brand}>
            David Huang
          </Link>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Navigationbar;