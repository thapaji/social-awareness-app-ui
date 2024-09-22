import axios from 'axios';
import { apiProcessor } from '../../helpers/axiosHelper';

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const contactEp = rootAPI + '/contact';

export const fetchMessages = async () => {
    const axiosObj = { method: 'GET', url: contactEp, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const addMessage = async (contactObj) => {
    const axiosObj = { method: 'POST', url: contactEp, data: contactObj, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const updateMessage = async (id, contactObj) => {
    const axiosObj = { method: 'PUT', url: `${contactEp}/${id}`, data: contactObj, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const deleteMessage = async (id) => {
    const axiosObj = { method: 'DELETE', url: contactEp, data: { ids: [id] }, isPrivate: true };
    return await apiProcessor(axiosObj);
};
