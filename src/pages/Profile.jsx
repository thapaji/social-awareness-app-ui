import React, { useState } from "react";
import { Button, Col, Row, Image } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const Profile = ({ selectedUser }) => {
  const { user } = useSelector((state) => state.userInfo);
  const [myUser, setMyUser] = useState(selectedUser || user);
  const [status, setStatus] = useState(myUser.status);

  const toggleStatus = () => {
    setStatus(status === "active" ? "inactive" : "active");
  };

  return (
    <>
      <h4>Profile</h4>
      <hr />
      <Row>
        <Col className="text-center">
          <Image src="https://via.placeholder.com/150" roundedCircle />
        </Col>
        <Col>
          <p>
            <strong>Name:</strong> {myUser.fname} {myUser.lname}
          </p>
          <p>
            <strong>Email:</strong> {myUser.email}{" "}
            {user.isEmailVerified ? (
              <FaCheckCircle style={{ color: "green" }} />
            ) : (
              <FaTimesCircle style={{ color: "red" }} />
            )}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span style={{ color: status === "active" ? "green" : "red" }}>{status}</span>
          </p>
          <p>
            <strong>Role:</strong> {myUser.role}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(myUser.createdAt).toLocaleString().substring(0, 10)}
          </p>
        </Col>
      </Row>
      <Row>
        <h5>Actions</h5>
        <Col className="d-grid p-2">
          <Button variant="primary" className="me-2">
            Edit
          </Button>
        </Col>
        <Col className="d-grid p-2">
          <Button
            variant={status === "active" ? "danger" : "success"}
            className="me-2"
            onClick={toggleStatus}
          >
            {status === "active" ? "Deactivate" : "Activate"}
          </Button>
        </Col>
        <Col className="d-grid p-2">
          <Button variant="danger">Delete</Button>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
