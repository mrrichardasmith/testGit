import React from 'react';
import { Card, ListGroup } from 'bootstrap-4-react';

const img_src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffox&psig=AOvVaw1hWP38EdKeYkagTXHFlQ55&ust=1624897899098000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJDM2sKeuPECFQAAAAAdAAAAABAD';

export default function KitchenSink() {
  
    return (
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
    )
  
}