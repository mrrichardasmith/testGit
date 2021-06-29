import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default function Grid (props)    {
   
    return (
      <Container>
          <p className="border">Use Bootstrap powerful mobile-first flexbox grid to build layouts of all shapes and sizes.</p>
        <Row>
          <Col className="border" col="sm">One of three columns</Col>
          <Col className="border" col="sm">One of three columns</Col>
          <Col className="border" col="sm">One of three columns</Col>
        </Row>
      </Container>
    )
}