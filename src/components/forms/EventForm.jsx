import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, updateEvent } from "../../pages/events/eventActions";

const EventForm = ({ eventToEdit, onCancel }) => {
  const dispatch = useDispatch();

  const causes = useSelector((state) => state.causes.causes); // Get causes from Redux

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
        image: eventToEdit.image,
      });
    } else if (causes && causes.length > 0) {
      reset({
        cause: '',
        causeTitle: '',
      });
    } else {
      reset();
    }
  }, [eventToEdit, reset, causes]);

  const onSubmit = (data) => {
    const selectedCause = causes.find((cause) => cause._id === data.cause); // Get the selected cause details

    const formData = {
      title: data.title,
      description: data.description,
      cause: { causeId: selectedCause._id, causeTitle: selectedCause.title }, // Set both causeId and causeTitle
      date: new Date(data.date).toISOString(),
      location: data.location,
      image: data.image, 
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
          as="select"
          {...register("cause", { required: "Cause is required" })}
          isInvalid={!!errors.cause}
        >
           <option key='' value=''>
              -- Select a cause --
            </option>
          {causes.map((cause) => (
            <option key={cause._id} value={cause._id}>
              {cause.title}
            </option>
          ))}
        </Form.Control>
        <Form.Control.Feedback type="invalid">{errors.cause?.message}</Form.Control.Feedback>
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

      <Form.Group controlId="formImage">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image URL"
          {...register("image", { required: "Image URL is required" })}
          isInvalid={!!errors.image}
        />
        <Form.Control.Feedback type="invalid">{errors.image?.message}</Form.Control.Feedback>
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
