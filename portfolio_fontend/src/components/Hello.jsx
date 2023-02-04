import React from "react";
import { Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
export default function Hello() {
  return (
    <Stack className="mt-5">
      <div className="d-flex p-5 mt-5" >
        <FontAwesomeIcon icon={faDesktop} size="5x" />
        <div className="mb-5 ps-3">
          <p>Hello, I am</p>
          <h2>Nguyen Tri</h2>
        </div>
      </div>

      <div className="text-end mt-5">
        <p>WEB DEVELOPER</p>
        <p>FULL STACK</p>
      </div>
    </Stack>
  );
}
