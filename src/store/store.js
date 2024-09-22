import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../pages/user/userSlice";
import causeReducer from "../pages/cause/causeSlice";
import eventReducer from "../pages/events/eventSlice";
import businessReducer from "../pages/business/businessSlice";
import contactReducer from "../pages/contact/contactSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        causes: causeReducer,
        events: eventReducer,
        business: businessReducer,
        contact: contactReducer,
    }
})