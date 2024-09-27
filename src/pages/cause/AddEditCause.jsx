import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import CauseForm from "../../components/forms/CauseForm";

const AddEditCause = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const causes = useSelector((state) => state.causes.causes);
  const causeToEdit = causes.find((cause) => cause._id === id);

  const handleCancel = () => {
    navigate("/admin/causes");
  };

  return (
    <AdminLayout>
      <div className="accent-bg p-4">
        <h1 className="dash-heading">{id ? "Edit Cause" : "Add Cause"}</h1>
        <hr />
        <CauseForm causeToEdit={causeToEdit} onCancel={handleCancel} />
      </div>
    </AdminLayout>
  );
};

export default AddEditCause;
