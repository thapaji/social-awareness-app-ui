import React, { useEffect } from "react";
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

const App = () => {
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
        <Route path="/admin/events/add/:id" element={<AddEditEvent />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/admins" element={<Admins />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
