// src/redux/eventSlice.js
import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: "events",
    initialState: {
        events: [],
        status: 'idle',
        error: null
    },
    reducers: {
        setEvents(state, action) {
            state.events = action.payload;
        },
        addEvent(state, action) {
            state.events.push(action.payload);
        },
        updateEvent(state, action) {
            const index = state.events.findIndex(event => event._id === action.payload._id);
            if (index !== -1) {
                state.events[index] = action.payload;
            }
        },
        deleteEvent(state, action) {
            state.events = state.events.filter(event => event._id !== action.payload);
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
});

export const { setEvents, addEvent, updateEvent, deleteEvent, setStatus, setError } = eventSlice.actions;

export default eventSlice.reducer;
