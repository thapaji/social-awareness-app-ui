import axios from 'axios';
import { apiProcessor } from '../../helpers/axiosHelper';

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const advertisementEp = rootAPI + '/advertisements';

export const fetchAdvertisementsAPI = async () => {
    const axiosObj = { method: 'GET', url: advertisementEp, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const addAdvertisementAPI = async (advertisementObj) => {
    const axiosObj = { method: 'POST', url: advertisementEp, data: advertisementObj, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const updateAdvertisementAPI = async (id, advertisementObj) => {
    const axiosObj = { method: 'PUT', url: `${advertisementEp}/${id}`, data: advertisementObj, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const deleteAdvertisementAPI = async (id) => {
    const axiosObj = { method: 'DELETE', url: advertisementEp, data: { ids: [id] }, isPrivate: true };
    return await apiProcessor(axiosObj);
};
