import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";

export const Header = () => {
  const { user } = useUser();
  const userRole = user?.publicMetadata?.role;

  return (
    <Navbar className="p-3 shadow mb-4" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ width: "8rem" }} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userRole?.includes("admin") && (
              <>
                <Link className="nav-link admin-nav" to="/admin/dashboard">
                  Dashboard
                </Link>
              </>
            )}
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
            <Link className="nav-link" to="/need-support">
              Need Support?
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            <SignedOut>
              <SignInButton className="nav-link" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
