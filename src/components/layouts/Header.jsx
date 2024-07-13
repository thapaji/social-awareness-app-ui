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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/need-support">Need Support?</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/user/new">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
