import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Hello from "./Hello";
import Avatar from "./Avatar";
export default function Home() {
  return (
    <Container style={{height:"calc(100vh - 40px)"}}>
      <Stack >
      <Row xs={3}>
      <Col>
          <Hello />
        </Col>
        <Col>
            <Avatar/>
        </Col>
      </Row>
        
      </Stack>
    </Container>
  );
}
