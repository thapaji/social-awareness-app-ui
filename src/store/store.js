import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../pages/user/userSlice";
import causeReducer from "../pages/cause/causeSlice";
import eventReducer from "../pages/events/eventSlice";
// import systemReducer from "./systemSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        causes: causeReducer,
        events: eventReducer,
        // system: systemReducer,
    }
})