import { toast } from "react-toastify";
import { fetchUserInfo, fetchUsers, loginUser, postNewUser } from "./userAxios";
import { setUser, setUsers } from "./userSlice";

export const postUserObj = (user) => async (dispatch) => {
    const pending = postNewUser(user);
    toast.promise(pending, { pending: 'Please Wait...' })
    const { status, message } = await pending;
    toast[status](message);
    return status;
}


export const loginAction = (user) => async (dispatch) => {
    const pending = loginUser(user);
    toast.promise(pending, { pending: 'Please Wait...' })
    const { status, message } = await pending;
    toast[status](message);
    return status;
}

export const getUserObj = () => async (dispatch) => {
    const { status, user } = await fetchUserInfo();
    dispatch(setUser(user))
}

export const getUsers = () => async (dispatch) => {
    const { status, data } = await fetchUsers();
    if (status === 'success') dispatch(setUsers(data))
}