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
import NeedSupport from "./pages/static/NeedSupport";
import Dashboard from "./pages/admin/Dashboard";

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
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
