import { createSlice } from '@reduxjs/toolkit';

const causeSlice = createSlice({
    name: 'causes',
    initialState: {
        causes: [],
        loading: false,
        error: null,
    },
    reducers: {
        setCauses(state, action) {
            state.causes = action.payload;
        },
    },
});

export const { setCauses } = causeSlice.actions;

export default causeSlice.reducer;
