import React from 'react';
import {Card, Button} from 'react-bootstrap';

function Album(props) {
    return(
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.thumbnailUrl} width = "100px" height="200px" />
  <Card.Body>
    <Card.Title>{props.albumName}</Card.Title>
    <Card.Text>
      {props.title}
    </Card.Text>
    <Button variant="primary">Add To Cart</Button>
  </Card.Body>
</Card>
    );
}
export default Album;