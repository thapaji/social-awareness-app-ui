import React from "react";
import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Row className="">
          <Col lg={8}>
            <Row>
              <Col className="header-sides rounded-lg" lg={1}>
                <Link className="">Cause Chronicle</Link>
              </Col>
              <Col className="p-2 ms-4 bg-grey rounded-lg">
                <Col className="d-flex justify-content-between">
                  <Col className="d-grid p-1">
                    <Button className="rounded-lg" variant="light">
                      Following
                    </Button>
                  </Col>
                  <Col className="d-grid p-1">
                    {" "}
                    <Button className="rounded-lg" variant="light">
                      New
                    </Button>
                  </Col>
                  <Col className="d-grid p-1">
                    <Button className="rounded-lg" variant="light">
                      Popular
                    </Button>
                  </Col>
                </Col>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>{""}</Col>

              <Col className="">
                <Navbar expand="">
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="hamburger-menu bg-dark"
                  />
                  <Navbar.Collapse id="basic-navbar-nav" className="bg-dark  mt-1 ps-2">
                    <Nav>
                      <Nav.Link href="#home" className="text-white">
                        Home
                      </Nav.Link>
                      <Nav.Link href="#link" className="text-white">
                        Link
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
          </Col>
          <Col lg={1}>
            <Row>
              <Col className="header-sides rounded-lg" lg={1}>
                <Link className="">Cause Chronicle</Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="centered">
          <Col>
            <Form.Control type="text" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
