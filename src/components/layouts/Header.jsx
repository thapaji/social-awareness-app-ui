import React from "react";
import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Row className="p-4">
        <Col lg={1}>
          <Link className="navbar-brand">Cause Chronicle</Link>
        </Col>
        <Col className="px-4">
          <Row>
            <Col className="px-4 d-flex justify-content-between">
              <Col className="d-grid">
                <Button className="rounded" variant="light">
                  Following
                </Button>
              </Col>
              <Col className="d-grid">
                {" "}
                <Button className="rounded" variant="light">
                  New
                </Button>
              </Col>
              <Col className="d-grid">
                <Button className="rounded" variant="light">
                  Popular
                </Button>
              </Col>
            </Col>
            <Col lg={1}>
              <Navbar expand="" className="bg-body-tertiary">
                <Container>
                  {/* <Navbar.Brand href="#home">Menu</Navbar.Brand> */}
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Col>
        <Col lg={1}>
          {" "}
          <Link className="navbar-brand">Name</Link>
        </Col>
      </Row>
      <Row>
        <Form.Control type="text" style={{ width: "50%", margin: "auto" }} />
      </Row>
    </div>
  );
};
