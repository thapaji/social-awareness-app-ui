// src/pages/admin/AdminEvents.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { fetchEvents, deleteEvent } from "./eventActions";
import { useNavigate } from "react-router-dom";
import { AdminLayout } from "../../components/layouts/AdminLayout";

const AdminEvents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

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
        <h1 className="dash-heading">Events</h1>
        <Button variant="primary" onClick={() => navigate("/admin/events/add")}>
          Add New Event
        </Button>
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
                  <Button variant="warning" onClick={() => handleEdit(event._id)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(event._id)} className="ms-2">
                    Delete
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
