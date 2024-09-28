import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Card, Spinner, Alert, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";
import { FaImage } from "react-icons/fa";
import { addEvent } from "../events/eventActions";
import { useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";

const googleApi = import.meta.env.VITE_GOOGLE_API_KEY;
const libraries = ["places"];

export const EventStatus = () => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const causes = useSelector((state) => state.causes.causes);
  const searchBoxRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleApi,
    libraries,
  });

  useEffect(() => {
    reset();
  }, [reset]);

  const onSubmit = async (data) => {
    setLoading(true);
    const selectedCause = causes.find((cause) => cause._id === data.cause);

    if (!data.image[0]) {
      setErrorMessage("Image is required");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("causeId", selectedCause?._id);
    formData.append("causeTitle", selectedCause?.title);
    formData.append("date", new Date(data.date).toISOString());
    formData.append("location", data.location);
    formData.append("image", data.image[0]);

    try {
      await dispatch(addEvent(formData));
      reset();
      setImagePreview(null);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  return (
    <Card className="mb-4 shadow-sm" style={{ width: "100%", margin: "auto" }}>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <fieldset disabled={loading}>
            <div className="d-flex align-items-center mb-3">
              <img
                src={user.imageUrl}
                alt={user.username}
                className="lover-image"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <Form.Control
                type="text"
                placeholder="Event Title"
                className="border-0 fs-5 ms-3"
                style={{ fontWeight: "bold" }}
                {...register("title", { required: "Title is required" })}
                isInvalid={!!errors.title}
              />
            </div>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Event Description"
              className="border-0 mb-3"
              style={{ resize: "none" }}
              {...register("description", { required: "Description is required" })}
              isInvalid={!!errors.description}
            />
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="eventDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date" // Changed from datetime-local to date
                    {...register("date", { required: "Date is required" })}
                    isInvalid={!!errors.date}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.date?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                {/* <Form.Group controlId="eventLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Event Location"
                    {...register("location", { required: "Location is required" })}
                    isInvalid={!!errors.location}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.location?.message}
                  </Form.Control.Feedback>
                </Form.Group> */}
                <Form.Group controlId="eventLocation">
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
                      <>
                        <Form.Control
                          type="text"
                          placeholder="Event location"
                          {...register("location", { required: "Location is required" })}
                          isInvalid={!!errors.location}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.location?.message}
                        </Form.Control.Feedback>
                      </>
                    </StandaloneSearchBox>
                  )}
                  <Form.Control.Feedback type="invalid">
                    {errors.location?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
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
                  <Form.Control.Feedback type="invalid">
                    {errors.cause?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center">
                <FaImage size={20} className="me-2 text-muted" />
                <Form.Control
                  type="file"
                  {...register("image", { required: "Image is required" })}
                  accept="image/*"
                  onChange={handleImageChange}
                  className="border-0"
                  isInvalid={!!errors.image}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.image?.message}
                </Form.Control.Feedback>
              </div>
            </div>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="img-thumbnail mb-3"
                style={{ maxWidth: "200px" }}
              />
            )}
            <div className="text-end mt-3">
              <Button type="submit" variant="primary" className="rounded-pill px-4">
                {loading ? (
                  <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
                ) : (
                  "Post Event"
                )}
              </Button>
            </div>
          </fieldset>
        </Form>
      </Card.Body>
    </Card>
  );
};
