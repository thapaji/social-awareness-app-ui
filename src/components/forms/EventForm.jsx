import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, updateEvent } from "../../pages/events/eventActions";
import {  useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";

const libraries = ["places"];
const googleApi = import.meta.env.VITE_GOOGLE_API_KEY;

const EventForm = ({ eventToEdit, onCancel }) => {
  const dispatch = useDispatch();
  const causes = useSelector((state) => state.causes.causes);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const searchBoxRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleApi,
    libraries,
  });

  const {
    register,
    handleSubmit,
    setValue,
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
        date: eventToEdit.date.slice(0, 10),
        location: eventToEdit.location,
      });
      setImageFile(null);
    } else if (causes && causes.length > 0) {
      reset({
        cause: "",
        causeTitle: "",
      });
    } else {
      reset();
    }
  }, [eventToEdit, reset, causes]);

  const onSubmit = async (data) => {
    setLoading(true);
    const selectedCause = causes.find((cause) => cause._id === data.cause);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("causeId", selectedCause?._id);
    formData.append("causeTitle", selectedCause?.title);
    formData.append("date", new Date(data.date).toISOString());
    formData.append("location", data.location);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    if (eventToEdit) {
      await dispatch(updateEvent(eventToEdit._id, formData));
    } else {
      await dispatch(addEvent(formData));
    }
    setLoading(false);
    onCancel();
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formTitle" className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          {...register("title", { required: "Title is required" })}
          isInvalid={!!errors.title}
        />
        <Form.Control.Feedback type="invalid">{errors.title?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formDescription" className="mb-3">
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

      <Form.Group controlId="formCause" className="mb-3">
        <Form.Label>Cause</Form.Label>
        <Form.Control
          as="select"
          {...register("cause", { required: "Cause is required" })}
          isInvalid={!!errors.cause}
        >
          <option key="" value="">
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

      <Form.Group controlId="formDate" className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          {...register("date", { required: "Date is required" })}
          isInvalid={!!errors.date}
        />
        <Form.Control.Feedback type="invalid">{errors.date?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formLocation" className="mb-3">
        <Form.Label>Location</Form.Label>
        {isLoaded && (
          <StandaloneSearchBox
            onLoad={(ref) => (searchBoxRef.current = ref)}
            onPlacesChanged={() => {
              const places = searchBoxRef.current.getPlaces();
              if (places && places.length > 0) {
                const selectedPlace = places[0];
                setValue("location", selectedPlace.formatted_address);
              }
            }}
          >
            <Form.Control
              type="text"
              placeholder="Enter location"
              {...register("location", { required: "Location is required" })}
              isInvalid={!!errors.location}
            />
          </StandaloneSearchBox>
        )}
        <Form.Control.Feedback type="invalid">{errors.location?.message}</Form.Control.Feedback>
      </Form.Group>

      {!eventToEdit && (
        <Form.Group controlId="formImage" className="mb-4">
          <Form.Label>Image Upload</Form.Label>
          <Form.Control
            type="file"
            {...register("image", { required: "Image is required" })}
            accept="image/*"
            onChange={handleImageChange}
            isInvalid={!!errors.image}
          />
          <Form.Control.Feedback type="invalid">{errors.image?.message}</Form.Control.Feedback>
        </Form.Group>
      )}

      {eventToEdit && eventToEdit.image && (
        <div className="mb-3">
          <Image src={eventToEdit.image} rounded thumbnail />
          <Form.Group controlId="changeImage" className="mt-2">
            <Form.Label>Change Image?</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
          </Form.Group>
        </div>
      )}

      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? "Loading..." : eventToEdit ? "Update Event" : "Add Event"}
      </Button>
      <Button variant="secondary" onClick={onCancel} className="ms-4">
        Cancel
      </Button>
    </Form>
  );
};

export default EventForm;
