import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";

export const Header = () => {
  const { user } = useUser();
  const userRole = user?.publicMetadata?.role;

  return (
    <Navbar className="p-3 shadow" expand="lg">
      <Container>
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ width: "8rem" }} />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userRole?.includes("admin") && (
              <>
                <NavLink className="nav-link admin-nav" to="/admin/dashboard">
                  Dashboard
                </NavLink>
              </>
            )}
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about" activeClassName="active">
              About Us
            </NavLink>
            <NavLink className="nav-link" to="/need-support" activeClassName="active">
              Need Support?
            </NavLink>
            <NavLink className="nav-link" to="/contact" activeClassName="active">
              Contact
            </NavLink>
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
