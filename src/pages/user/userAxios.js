import axios from "axios";
import { apiProcessor } from "../../helpers/axiosHelper";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const userEp = rootAPI + "/users";


export const loginUser = async (userObj) => {
    const axiosObj = { method: 'POST', url: userEp + "/login", data: userObj }
    return await apiProcessor(axiosObj);
};

export const postNewUser = async (userObj) => {
    const axiosObj = { method: 'POST', url: userEp, data: userObj }
    return await apiProcessor(axiosObj);
};

export const fetchUserInfo = async () => {
    const axiosObj = { method: 'GET', url: userEp, isPrivate: true}
    return await apiProcessor(axiosObj);
};