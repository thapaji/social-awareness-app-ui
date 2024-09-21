import { createSlice } from '@reduxjs/toolkit';

const businessSlice = createSlice({
    name: 'business',
    initialState: {
        advertisements: [],
        loading: false,
        error: null,
    },
    reducers: {
        setAdvertisements(state, action) {
            state.causes = action.payload;
        },
    },
});

export const { setAdvertisements } = businessSlice.actions;

export default businessSlice.reducer;
