// src/redux/eventActions.js
import { toast } from "react-toastify";
import { fetchEvents as fetchEventsAPI, createEvent, updateEvent as updateEventAPI, deleteEvent as deleteEventAPI } from "./eventAxios";
import { setEvents } from "./eventSlice";

export const fetchEvents = () => async (dispatch) => {
    try {
        const { status, data } = await fetchEventsAPI();
        if (status === 'success') dispatch(setEvents(data.events));
    } catch (error) {
        toast.error("Failed to fetch events");
    }
};

export const addEvent = (event) => async (dispatch) => {
    try {
        const { status, message } = await createEvent(event);
        if (status === 'success') {
            dispatch(fetchEvents());
            toast.success(message);
        }
    } catch (error) {
        toast.error("Failed to add event");
    }
};

export const updateEvent = (id, event) => async (dispatch) => {
    try {
        const { status, message } = await updateEventAPI(id, event);
        if (status === 'success') {
            dispatch(fetchEvents());
            toast.success(message);
        }
    } catch (error) {
        toast.error("Failed to update event");
    }
};

export const deleteEvent = (id) => async (dispatch) => {
    try {
        const { status, message } = await deleteEventAPI(id);
        if (status === 'success') {
            dispatch(fetchEvents());
            toast.success(message);
        }
    } catch (error) {
        toast.error("Failed to delete event");
    }
};
