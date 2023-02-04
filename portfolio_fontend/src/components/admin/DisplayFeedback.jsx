import React from "react";
import { Col, Row } from "react-bootstrap";
import NavVertical from "./NavVertical";
import Feedback from "./Feedback";

export default function DisplayFeedback() {
  return (
    <>
      <Row>
        <Col xs={1}>
          <NavVertical />
        </Col>
        <Col>
          <Feedback/>
        </Col>
      </Row>
    </>
  );
}
