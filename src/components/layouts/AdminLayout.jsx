import React from "react";
import { Header } from "./Header";
import { Nav, Stack, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaUsers, FaHeart, FaCalendarAlt, FaCogs, FaUserShield } from "react-icons/fa";

export const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="accent-bg full-height-content">
        <Row>
          <Col sm={3} className="border-end p-3 secondary-bg" style={{ minHeight: "80vh" }}>
            <Stack gap={3}>
              <NavLink className="ms-4 p-4 nav-link admin-nav" to="/admin/dashboard">
                <FaCogs className="me-2" /> Dashboard
              </NavLink>
              <NavLink className="ms-4 p-4 nav-link admin-nav" to="/admin/users">
                <FaUsers className="me-2" /> Users
              </NavLink>
              <NavLink className="ms-4 p-4 nav-link admin-nav" to="/admin/causes">
                <FaHeart className="me-2" /> Causes
              </NavLink>
              <NavLink className="ms-4 p-4 nav-link admin-nav" to="/admin/events">
                <FaCalendarAlt className="me-2" /> Events
              </NavLink>
              <NavLink className="ms-4 p-4 nav-link admin-nav" to="/admin/settings">
                <FaCogs className="me-2" /> Settings
              </NavLink>
              <NavLink className="ms-4 p-4 nav-link admin-nav" to="/admin/admins">
                <FaUserShield className="me-2" /> Admins
              </NavLink>
            </Stack>
          </Col>
          <Col>
            <main>{children}</main>
          </Col>
        </Row>
      </div>
    </>
  );
};
