import React from "react";
import { Nav } from "react-bootstrap";
export default function NavVertical() {
  return (
        <Nav
          className="col-md-12 d-none d-md-block bg-dark pt-3"
          style={{minHeight: "100vh"}}
          // style={{
          //   position: "fixed",
          //   top: "0",
          //   bottom: "0",
          //   left: "0",
          //   minHeight: "100vh !important",
          //   padding: "48px 0 0",
          //   boxShadow: "inset -1px 0 0 rgba(0, 0, 0, .1)",
          // }}
        >
          <Nav.Item>
            <Nav.Link href="/admin" className="text-light">
              Admin
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/" className="text-light">
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
  );
}
