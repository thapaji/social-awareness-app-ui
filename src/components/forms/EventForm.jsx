import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addEvent, updateEvent } from "../../pages/events/eventActions";

const EventForm = ({ eventToEdit, onCancel }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (eventToEdit) {
      reset({
        title: eventToEdit.title,
        description: eventToEdit.description,
        cause: eventToEdit.cause.causeId,
        causeTitle: eventToEdit.cause.causeTitle,
        date: eventToEdit.date,
        location: eventToEdit.location,
      });
    } else {
      reset();
    }
  }, [eventToEdit, reset]);

  const onSubmit = (data) => {
    console.log(data);
    const formData = {
      title: data.title,
      description: data.description,
      cause: { causeId: data.cause, causeTitle: data.causeTitle },
      date: new Date(data.date).toISOString(),
      location: data.location,
    };
    if (eventToEdit) {
      dispatch(updateEvent(eventToEdit._id, formData));
    } else {
      dispatch(addEvent(formData));
    }
    onCancel();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          {...register("title", { required: "Title is required" })}
          isInvalid={!!errors.title}
        />
        <Form.Control.Feedback type="invalid">{errors.title?.message}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          {...register("description", { required: "Description is required" })}
          isInvalid={!!errors.description}
        />
        <Form.Control.Feedback type="invalid">{errors.description?.message}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formCause">
        <Form.Label>Cause</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter cause ID"
          {...register("cause", { required: "Cause is required" })}
          isInvalid={!!errors.cause}
        />
        <Form.Control.Feedback type="invalid">{errors.cause?.message}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formCauseTitle">
        <Form.Label>Cause Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter cause title"
          {...register("causeTitle", { required: "Cause title is required" })}
          isInvalid={!!errors.causeTitle}
        />
        <Form.Control.Feedback type="invalid">{errors.causeTitle?.message}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          {...register("date", { required: "Date is required" })}
          isInvalid={!!errors.date}
        />
        <Form.Control.Feedback type="invalid">{errors.date?.message}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter location"
          {...register("location", { required: "Location is required" })}
          isInvalid={!!errors.location}
        />
        <Form.Control.Feedback type="invalid">{errors.location?.message}</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        {eventToEdit ? "Update Event" : "Add Event"}
      </Button>
      <Button variant="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </Form>
  );
};

export default EventForm;
