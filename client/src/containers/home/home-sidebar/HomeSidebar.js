import React from 'react';
import { Row, Col } from 'react-bootstrap';

import classes from './HomeSidebar.module.css';

const HomeSidebar = () => {
  return (
    <Col>
      <Row className={classes.SideBarTitle}>My Works</Row>
      <Row className={classes.RowItem}><button className={classes.BigButton}>Software Projects</button></Row>
      <Row className={classes.RowItem}><button className={classes.BigButton}>Podcast</button></Row>
      <Row className={classes.RowItem}><button className={classes.BigButton}>Articles</button></Row>
      <Row className={classes.RowItem}><button className={classes.BigButton}>Photography / Design</button></Row>
    </Col>
  );
}

export default HomeSidebar;