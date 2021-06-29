import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default function EqualWidth() {
  
    return (
        <>
        <br/>
      <Container className="container">
          <p className="border">Equal width columns</p>
        <Row>
          <Col className="border">1 of 2</Col>
          <Col className="border">2 of 2</Col>
        </Row>
        <Row>
          <Col className="border">1 of 3</Col>
          <Col className="border">2 of 3</Col>
          <Col className="border">3 of 3</Col>
        </Row>
      </Container>
      </>
    )
}