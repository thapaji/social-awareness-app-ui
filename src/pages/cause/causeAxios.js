import axios from 'axios';
import { apiProcessor } from '../../helpers/axiosHelper';

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const causeEp = rootAPI + '/causes';

export const fetchCauses = async () => {
    const axiosObj = { method: 'GET', url: causeEp, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const addCause = async (causeObj) => {
    const axiosObj = { method: 'POST', url: causeEp, data: causeObj, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const updateCause = async (id, causeObj) => {
    const axiosObj = { method: 'PUT', url: `${causeEp}/${id}`, data: causeObj, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const deleteCause = async (id) => {
    const axiosObj = { method: 'DELETE', url: causeEp, data: { ids: [id] }, isPrivate: true };
    return await apiProcessor(axiosObj);
};
