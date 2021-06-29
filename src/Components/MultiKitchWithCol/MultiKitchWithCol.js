import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'bootstrap-4-react';

export default function Grid (props)    {

    let img_src = 'cat.jpg'
   
    return (
        <>
        <br />
      <Container>
          <p className="border">Use Bootstrap powerful mobile-first flexbox grid to build layouts of all shapes and sizes.</p>
        <Row>
          <Col className="border" col="sm">
          <Card style={{ width: '18rem' }}>
        <Card.Image src={img_src} top/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card content.
          </Card.Text>
        </Card.Body>
        <ListGroup flush>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card link</Card.Link>
          <Card.Link href="#">Another link</Card.Link>
        </Card.Body>
      </Card>
          </Col>
          <Col className="border" col="sm">
          <Card style={{ width: '18rem' }}>
        <Card.Image src={img_src} top/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card content.
          </Card.Text>
        </Card.Body>
        <ListGroup flush>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card link</Card.Link>
          <Card.Link href="#">Another link</Card.Link>
        </Card.Body>
      </Card>
          </Col>
          <Col className="border" col="sm">
          <Card style={{ width: '18rem' }}>
        <Card.Image src={img_src} top/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card content.
          </Card.Text>
        </Card.Body>
        <ListGroup flush>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card link</Card.Link>
          <Card.Link href="#">Another link</Card.Link>
        </Card.Body>
      </Card>
          </Col>
        </Row>
      </Container>
      </>
    )
}