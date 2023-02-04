import React from "react";
import { Card, Col } from "react-bootstrap";
export default function Cards(props) {
  return (
    <Col>
      <Card >
        <Card.Link href={props.linkProject}>
          <Card.Img style={{ height:"13rem"}} variant="top" src={props.imgURL} />
        </Card.Link>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
