import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import HomeSidebar from './home-sidebar/HomeSidebar';

class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={3}>
            <HomeSidebar />
          </Col>
          <Col sm={9}>
            Profile
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;