import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faNodeJs,
  faJs,
  faReact,
  faBootstrap,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import { Row } from "react-bootstrap";

export default function Skills() {
  return (
    <Row md={3}>
      <div className="mb-4">
        <FontAwesomeIcon icon={faHtml5} size="3x" />
        <p>Html</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faCss3} size="3x" /> <p>Css</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faJs} size="3x" /> <p>Javascript</p>
      </div>
      <div className="mb-4">
        <FontAwesomeIcon icon={faNodeJs} size="3x" /> <p>Nodejs</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faReact} size="3x" /> <p>React</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faBootstrap} size="3x" /> <p>React-Bootstrap</p>
      </div>
      <div className="mb-4">
        <FontAwesomeIcon icon={faFontAwesome} size="3x" /> <p>FontAwesome</p>
      </div>
    </Row>
  );
}
