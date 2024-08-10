import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import { Col, Row, Stack } from "react-bootstrap";
import { FaUsers, FaHeart, FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="accent-bg p-4">
        <h1 className="dash-heading">Dashboard</h1>
        <hr />
      </div>
      <div className="stats-container p-4 mt-4">
        <Row className="justify-content-center text-center">
          <Col md={4} sm={6} className="mb-4 col-circle">
            <div className="stat-circle pink-circle">
              <FaHeart size={50} />
            </div>
            <h4 className="stat-label">500+ Causes</h4>
          </Col>
          <Col md={4} sm={6} className="mb-4 col-circle">
            <div className="stat-circle blue-circle">
              <FaCalendarAlt size={50} />
            </div>
            <h4 className="stat-label">200+ Events</h4>
          </Col>
          <Col md={4} sm={6} className="mb-4 col-circle">
            <div className="stat-circle white-circle">
              <FaUsers size={50} />
            </div>
            <h4 className="stat-label">1000+ Users</h4>
          </Col>
        </Row>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
