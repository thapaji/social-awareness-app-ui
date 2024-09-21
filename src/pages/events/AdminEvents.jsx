import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Row, Col } from "react-bootstrap";
import { fetchEvents, deleteEvent } from "./eventActions";
import { Link, useNavigate } from "react-router-dom";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const AdminEvents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state) => state.events.events);

  // useEffect(() => {
  //   dispatch(fetchEvents());
  // }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/admin/events/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      dispatch(deleteEvent(id));
    }
  };

  return (
    <AdminLayout>
      <div className="accent-bg p-4">
        <Row>
          <Col>
            <h1 className="dash-heading">Events</h1>
          </Col>
          <Col className="text-end">
            <Link to="/admin/events/add">
              <Button variant="primary">
                <FaPlus />
              </Button>
            </Link>
          </Col>
        </Row>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Cause</th>
              <th>Date</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.cause.causeTitle}</td>
                <td>{new Date(event.date).toLocaleDateString()}</td>
                <td>{event.location}</td>
                <td>
                  <Link to={`/admin/events/edit/${event._id}`}>
                    <Button variant="warning">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button variant="danger" onClick={() => handleDelete(event._id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default AdminEvents;
