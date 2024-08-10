import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import EventForm from "../../components/forms/EventForm";

const AddEditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const events = useSelector((state) => state.events.events);
  const eventToEdit = events.find((event) => event._id === id);

  const handleCancel = () => {
    navigate("/admin/events");
  };

  return (
    <AdminLayout>
      <div className="accent-bg p-4">
        <h1 className="dash-heading">{id ? "Edit Event" : "Add Event"}</h1>
        <EventForm eventToEdit={eventToEdit} onCancel={handleCancel} />
      </div>
    </AdminLayout>
  );
};

export default AddEditEvent;
