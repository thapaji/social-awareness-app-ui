import React from "react";
import { Header } from "./Header";
import { NavLink } from "react-router-dom";
import { Stack } from "react-bootstrap";
import { FaUsers, FaHeart, FaCalendarAlt, FaCogs, FaBullhorn, FaEnvelope } from "react-icons/fa";

export const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="accent-bg full-height-content" style={{ display: "flex" }}>
        <div
          className="border-end p-3 secondary-bg"
          style={{
            width: "25%",
            height: "80vh",
            position: "fixed",
            top: "20vh",
            left: "0",
            zIndex: "1000",
          }}
        >
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

            <NavLink className="ms-4 p-4 nav-link admin-nav" to="/admin/advertisements">
              <FaBullhorn className="me-2" /> Adverts
            </NavLink>

            <NavLink className="ms-4 p-4 nav-link admin-nav" to="/admin/messages">
              <FaEnvelope className="me-2" /> Messages
            </NavLink>
          </Stack>
        </div>

        <div
          style={{
            marginLeft: "25%",
            padding: "20px",
            width: "75%",
            overflowY: "auto",
            height: "80vh",
          }}
        >
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};
