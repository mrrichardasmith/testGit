import React from 'react';
import { Container, Row, Col, BDiv } from 'bootstrap-4-react';

export default function WithRowsEqualWidth() {
  
    return (
      <>
      <br />
      <Container>
        <p className="border">Equal-width columns can be broken into multiple lines.</p>
        <Row>
          <Col className="border">Column</Col>
          <Col className="border">Column</Col>
          <BDiv w="100"></BDiv>
          <Col className="border">Column</Col>
          <Col className="border">Column</Col>
        </Row>
      </Container>
      </>
    )
}