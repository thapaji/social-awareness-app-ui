import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createAdvertisement, updateAdvertisement } from "../../pages/business/businessAction";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

const AdvertisementForm = ({ adToEdit, onCancel }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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
        image: null,
      });
    } else {
      reset();
    }
  }, [adToEdit, reset]);

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("title", data.title);
    formData.append("business", data.business);
    formData.append("description", data.description);

    if (adToEdit) {
      await dispatch(updateAdvertisement(adToEdit._id, formData));
    } else {
      await dispatch(createAdvertisement(formData));
    }

    setLoading(false);
    onCancel();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formTitle" className="mb-4">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          {...register("title", { required: "Title is required" })}
          isInvalid={!!errors.title}
        />
        <Form.Control.Feedback type="invalid">{errors.title?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBusiness" className="mb-4">
        <Form.Label>Business Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Business Name"
          {...register("business", { required: "Business Name is required" })}
          isInvalid={!!errors.business}
        />
        <Form.Control.Feedback type="invalid">{errors.business?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formDescription" className="mb-4">
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

      <Form.Group controlId="formImage" className="mb-4">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          {...register("image", { required: "Image is required" })}
          isInvalid={!!errors.image}
        />
        <Form.Control.Feedback type="invalid">{errors.image?.message}</Form.Control.Feedback>
      </Form.Group>

      <div>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Loading..." : adToEdit ? "Update Advertisement" : "Add Advertisement"}
        </Button>
        <Button variant="secondary" onClick={onCancel} className="ms-4" disabled={loading}>
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default AdvertisementForm;
