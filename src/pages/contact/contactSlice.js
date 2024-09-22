import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: [],
        loading: false,
        error: null,
    },
    reducers: {
        setMessages(state, action) {
            state.messages = action.payload;
        },
    },
});

export const { setMessages } = contactSlice.actions;

export default contactSlice.reducer;
