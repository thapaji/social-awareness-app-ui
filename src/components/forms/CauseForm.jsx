import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCause, updateCause } from "../../pages/cause/causeAxios";

const CauseForm = ({ causeToEdit, onCancel }) => {
  const dispatch = useDispatch();
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
    } else {
      reset();
    }
  }, [causeToEdit, reset]);

  const onSubmit = (data) => {
    if (causeToEdit) {
      dispatch(updateCause(causeToEdit._id, data));
    } else {
      dispatch(addCause(data));
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
      <Form.Group controlId="formCategory">
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
      <Form.Group controlId="formCreatedBy">
        <Form.Label>Created By</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter creator's name"
          {...register("createdBy", { required: "Created By is required" })}
          isInvalid={!!errors.createdBy}
        />
        <Form.Control.Feedback type="invalid">{errors.createdBy?.message}</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        {causeToEdit ? "Update Cause" : "Add Cause"}
      </Button>
      <Button variant="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </Form>
  );
};

export default CauseForm;
