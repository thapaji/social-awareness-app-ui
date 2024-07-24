import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../pages/user/userSlice";
// import systemReducer from "./systemSlice";

export default configureStore({
    reducer: {
        userInfo: userReducer,
        // system: systemReducer,
    }
})