// src/api/eventAxios.js
import axios from "axios";
import { apiProcessor } from "../../helpers/axiosHelper";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const eventEp = `${rootAPI}/events`;

// Create a new event
export const createEvent = async (eventObj) => {
    const axiosObj = { method: 'POST', url: eventEp, data: eventObj };
    return await apiProcessor(axiosObj);
};

// Fetch all events
export const fetchEvents = async () => {
    const axiosObj = { method: 'GET', url: eventEp, isPrivate: true };
    return await apiProcessor(axiosObj);
};

// Fetch a single event by ID
export const fetchEventById = async (id) => {
    const axiosObj = { method: 'GET', url: `${eventEp}/${id}`, isPrivate: true };
    return await apiProcessor(axiosObj);
};

// Update an event by ID
export const updateEvent = async (id, eventObj) => {
    const axiosObj = { method: 'PUT', url: `${eventEp}/${id}`, data: eventObj };
    return await apiProcessor(axiosObj);
};

// Delete events by IDs
export const deleteEvent = async (ids) => {
    const axiosObj = { method: 'DELETE', url: eventEp, data: { ids } };
    return await apiProcessor(axiosObj);
};
