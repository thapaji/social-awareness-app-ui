import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createAdvertisement, updateAdvertisement } from "../../pages/business/businessAction";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

const AdvertisementForm = ({ adToEdit, onCancel }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (adToEdit) {
      reset({
        title: adToEdit.title,
        business: adToEdit.business,
        description: adToEdit.description,
        createdBy: adToEdit.createdBy,
        image: adToEdit.image,
      });
    } else {
      reset();
    }
  }, [adToEdit, reset]);

  const onSubmit = (data) => {
    if (adToEdit) {
      dispatch(updateAdvertisement(adToEdit._id, data));
    } else {
      dispatch(createAdvertisement(data));
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

      <Form.Group controlId="formBusiness">
        <Form.Label>Business Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Business Name"
          {...register("business", { required: "Business Name is required" })}
          isInvalid={!!errors.business}
        />
        <Form.Control.Feedback type="invalid">{errors.business?.message}</Form.Control.Feedback>
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

      {/* <Form.Group controlId="formCreatedBy">
        <Form.Label>Created By</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter creator's name"
          {...register("createdBy", { required: "Created By is required" })}
          isInvalid={!!errors.createdBy}
        />
        <Form.Control.Feedback type="invalid">{errors.createdBy?.message}</Form.Control.Feedback>
      </Form.Group> */}

      <Form.Group controlId="formImage">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder="Enter image URL" {...register("image")} />
      </Form.Group>

      <Button variant="primary" type="submit">
        {adToEdit ? "Update Advertisement" : "Add Advertisement"}
      </Button>
      <Button variant="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </Form>
  );
};

export default AdvertisementForm;
