import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default function OneColumnWidthWider() {
  
    return (
        <>
        <br/>
      <Container>
          <p className="border">Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it.</p>
        <Row>
          <Col className="border">1 of 3</Col>
          <Col className="border" col="6">2 of 3 (wider)</Col>
          <Col className="border">3 of 3</Col>
        </Row>
        <Row>
          <Col className="border">1 of 3</Col>
          <Col className="border" col="5">2 of 3 (wider)</Col>
          <Col className="border">3 of 3</Col>
        </Row>
      </Container>
      </>
    )
  }
