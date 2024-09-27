import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createCause, modifyCause } from "../../pages/cause/causeAction";
import { useUser } from "@clerk/clerk-react";

const CauseForm = ({ causeToEdit, onCancel }) => {
  const dispatch = useDispatch();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null); 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (causeToEdit) {
      reset({
        title: causeToEdit.title,
        description: causeToEdit.description,
        category: causeToEdit.category,
        createdBy: causeToEdit.createdBy,
      });
      setImageFile(null); 
    } else {
      reset({
        createdBy: user?.fullName || "",
      });
    }
  }, [causeToEdit, reset, user]);

  const onSubmit = async (data) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("createdBy", user.fullName);

    if (imageFile) {
      formData.append("image", imageFile);
    } else if (!causeToEdit) {
      alert("Image is required");
      setLoading(false);
      return;
    }

    if (causeToEdit) {
      await dispatch(modifyCause(causeToEdit._id, formData));
    } else {
      await dispatch(createCause(formData));
    }
    onCancel();
    setLoading(false);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
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

      <Form.Group controlId="formCategory" className="mb-4">
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          {...register("category", { required: "Category is required" })}
          isInvalid={!!errors.category}
        >
          <option value="">Select Category</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Environment">Environment</option>
          <option value="Social">Social</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">{errors.category?.message}</Form.Control.Feedback>
      </Form.Group>

      {!causeToEdit && (
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

      {causeToEdit && causeToEdit.image && (
        <div className="mb-3">
          <Image src={causeToEdit.image} rounded thumbnail />
          <Form.Group controlId="changeImage" className="mt-2">
            <Form.Label>Change Image?</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleImageChange} 
            />
          </Form.Group>
        </div>
      )}

      <div>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Loading..." : causeToEdit ? "Update Cause" : "Add Cause"}
        </Button>
        <Button variant="secondary" onClick={onCancel} className="ms-4">
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default CauseForm;
