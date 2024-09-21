import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import UserVerification from "./pages/UserVerification";
import Login from "./pages/user/Login";
import ForgetPassword from "./pages/user/ForgetPassword";
import Register from "./pages/user/Register";
import About from "./pages/static/About";
import Contact from "./pages/static/Contact";
import Dashboard from "./pages/admin/Dashboard";
import NeedSupport from "./pages/admin/NeedSupport";
import AwarnessList from "./pages/cause/AwarnessList";
import Business from "./pages/business/Business";
import Admins from "./pages/admin/Admins";
import Settings from "./pages/admin/Settings";
import AdminEvents from "./pages/events/AdminEvents";
import AdminCauses from "./pages/cause/AdminCauses";
import Users from "./pages/user/Users";
import AddEditCause from "./pages/cause/AddEditCause";
import AddEditEvent from "./pages/events/AddEditEvent";
import { getCauses } from "./pages/cause/causeAction";
import { useDispatch } from "react-redux";
import { fetchEvents } from "./pages/events/eventActions";
import Advertisements from "./pages/admin/Advertisements";
import { getUsers } from "./pages/user/userAction";
import { Spinner } from "react-bootstrap";
import AddEditAdvertisement from "./pages/business/AddEditAdvertisement";
import { getAdvertisements } from "./pages/business/businessAction";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await dispatch(getUsers());
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    dispatch(getCauses());
    dispatch(fetchEvents());
    dispatch(getAdvertisements());
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <h1>Setting up your environment....</h1>
        <h1>Please Wait while we get your system ready....</h1>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="border" />
        </div>
      </>
    );
  }
  return (
    <>
      <Routes>
        /************** Public Routes ****************/
        <Route path="/" element={<Home />} />
        <Route path="/verify-user" element={<UserVerification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/need-support" element={<NeedSupport />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/user/new" element={<Register />} />
        /************** Private Routes ****************/
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/need-support/awarness" element={<AwarnessList />} />
        <Route path="/need-support/business" element={<Business />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/causes" element={<AdminCauses />} />
        <Route path="/admin/causes/add" element={<AddEditCause />} />
        <Route path="/admin/causes/edit/:id" element={<AddEditCause />} />
        <Route path="/admin/events" element={<AdminEvents />} />
        <Route path="/admin/events/add" element={<AddEditEvent />} />
        <Route path="/admin/events/edit/:id" element={<AddEditEvent />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/admins" element={<Admins />} />
        <Route path="/admin/advertisements" element={<Advertisements />} />
        <Route path="/admin/advertisements/add" element={<AddEditAdvertisement />} />
        <Route path="/admin/advertisements/edit/:id" element={<AddEditAdvertisement />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
