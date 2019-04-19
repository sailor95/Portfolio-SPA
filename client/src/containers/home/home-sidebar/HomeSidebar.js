import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import classes from './HomeSidebar.module.css';

const HomeSidebar = () => {
  return (
    <Col>
      <Row className={classes.SideBarTitle}>My Works</Row>
      <Row className={classes.RowItem}><Link to="/sw-projects"><button className={classes.BigButton}>Software Projects</button></Link></Row>
      <Row className={classes.RowItem}><Link to="/podcasts"><button className={classes.BigButton}>Podcast</button></Link></Row>
      <Row className={classes.RowItem}><Link to="/articles"><button className={classes.BigButton}>Articles</button></Link></Row>
      <Row className={classes.RowItem}><Link to="/photos-design"><button className={classes.BigButton}>Photography / Design</button></Link></Row>
    </Col>
  );
}

export default HomeSidebar;