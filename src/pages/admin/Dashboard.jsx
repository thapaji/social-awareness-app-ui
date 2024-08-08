import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import { Col, Row, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaUsers, FaHeart, FaCalendarAlt, FaCogs, FaUserShield } from "react-icons/fa";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="accent-bg p-4">
        <h1 className="dash-heading">Dashboard</h1>
        <hr />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
