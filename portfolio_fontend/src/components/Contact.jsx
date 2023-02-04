import React from "react";
import { Container, Col, Image, Row } from "react-bootstrap";
import FormContact from "./FormContact";
export default function Contact() {
  return (
    <Container>
    <h2 className="d-flex justify-content-center">Contact</h2>
    <p className="d-flex justify-content-center pb-5">My email: ndtri0110@gmail.com</p>
      <Row md='2'>
        <Col>
          <Image style={{width:"700px"}}
            src={
              "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
            }
          />
        </Col>
        <Col>
            <FormContact />
        </Col>
      </Row>
    </Container>
  );
}
