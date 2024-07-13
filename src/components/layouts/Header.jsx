import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar className="p-3">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" style={{ width: "8rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#home">Need Support?</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#home">Log In</Nav.Link>
            <Nav.Link href="#link">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
