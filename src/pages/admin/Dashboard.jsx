import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <UserLayout>
      <Row>
        <Col sm={3} className="border-end p-3" style={{ minHeight: "80vh" }}>
          <Stack gap={3}>
            <Link className="ms-4 p-4 nav-link admin-nav">Users</Link>
            <Link className="ms-4 p-4 nav-link admin-nav">Causes</Link>
            <Link className="ms-4 p-4 nav-link admin-nav">Events</Link>
            <Link className="ms-4 p-4 nav-link admin-nav">Events</Link>
            <Link className="ms-4 p-4 nav-link admin-nav">Users</Link>
            <Link className="ms-4 p-4 nav-link admin-nav">Admins</Link>
          </Stack>
        </Col>
        <Col>
          <h2>Welcome to your dashboard</h2>
          <hr />
        </Col>
      </Row>
    </UserLayout>
  );
};

export default Dashboard;
