import React from 'react';

import { Navbar, Container } from 'react-bootstrap';
import classes from './Navigationbar.module.css';

const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand href="#">
          <div className={classes.Brand}>David Huang</div>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Navigationbar;