import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Skills from "./Skills";
import projects from "./projects";
import Cards from "./Cards";

export default function SkillsProjects() {
  return (
    <Container className="p-5">
      <h2 className="d-flex justify-content-center mb-5 mt-5">
        Skills & Projects
      </h2>
      <Stack className="p-3 d-flex">
        <Row>
          <Col xs={6}>
            <Skills />
          </Col>
          <Col xs={6}>
            <Row md={2} className="g-4">
              {projects.map((item) => (
                <Cards
                  key={item.id}
                  linkProject={item.linkProject}
                  imgURL={item.imgURL}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
}
