import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import classes from './Navigationbar.module.css';

const Navigationbar = () => {
  return (
    <div className={`contaner-fluid ${classes.NavBackground}`}>
      <nav className="navbar navbar-expand-lg">
        <Navbar.Brand>
          <Link to="/" className={classes.Brand}>
            David Huang
          </Link>
        </Navbar.Brand>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavDropdown" className="navbar-collapse collapse">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li> */}
          </ul>
          <ul className="navbar-nav">
            {
              !localStorage.getItem("jwtToken") &&
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            }
            {
              localStorage.getItem("jwtToken") &&
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard" onClick={() => localStorage.removeItem("jwtToken")}>Remove JWT</Link>
              </li>
            }
            <li className="nav-item">
              <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://2l6nt4.axshare.com">Axure Prototype</a>
            </li>
          </ul>
        </div>
      </nav>
    </div >
  );
}

export default Navigationbar;