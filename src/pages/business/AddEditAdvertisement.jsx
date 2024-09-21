import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import AdvertisementForm from "../../components/forms/AdvertisementForm";

const AddEditAdvertisement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const adverts = useSelector((state) => state.business.advertisements);
  const adToEdit = adverts.find((advert) => advert._id === id);

  const handleCancel = () => {
    navigate("/admin/advertisements");
  };

  return (
    <AdminLayout>
      <div className="accent-bg p-4">
        <h1 className="dash-heading">{id ? "Edit Advertisement" : "Add Advertisement"}</h1>
        <AdvertisementForm adToEdit={adToEdit} onCancel={handleCancel} />
      </div>
    </AdminLayout>
  );
};

export default AddEditAdvertisement;
