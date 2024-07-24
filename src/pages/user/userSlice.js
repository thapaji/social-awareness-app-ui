import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

const { reducer, actions } = userSlice;

export const { setUser } = actions;

export default reducer;