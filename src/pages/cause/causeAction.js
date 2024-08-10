import { toast } from 'react-toastify';
import {
    fetchCauses as fetchCausesAPI,
    addCause as addCauseAPI,
    updateCause as updateCauseAPI,
    deleteCause as deleteCauseAPI
} from './causeAxios';
import { setCauses } from './causeSlice';

export const getCauses = () => async (dispatch) => {
    try {
        const { status, data } = await fetchCausesAPI();
        if (status === 'success') {
            dispatch(setCauses(data.causes));
        } else {
            toast.error('Failed to fetch causes');
        }
    } catch (error) {
        toast.error('An error occurred while fetching causes');
    }
};

export const createCause = (cause) => async (dispatch) => {
    try {
        const { status, data } = await addCauseAPI(cause);
        if (status === 'success') {
            dispatch(getCauses()); // Refresh the list
            toast.success('Cause created successfully');
        } else {
            toast.error('Failed to create cause');
        }
    } catch (error) {
        toast.error('An error occurred while creating cause');
    }
};

export const modifyCause = (id, cause) => async (dispatch) => {
    try {
        const { status, data } = await updateCauseAPI(id, cause);
        if (status === 'success') {
            dispatch(getCauses()); // Refresh the list
            toast.success('Cause updated successfully');
        } else {
            toast.error('Failed to update cause');
        }
    } catch (error) {
        toast.error('An error occurred while updating cause');
    }
};

export const removeCause = (id) => async (dispatch) => {
    try {
        const { status } = await deleteCauseAPI(id);
        if (status === 'success') {
            dispatch(getCauses()); // Refresh the list
            toast.success('Cause deleted successfully');
        } else {
            toast.error('Failed to delete cause');
        }
    } catch (error) {
        toast.error('An error occurred while deleting cause');
    }
};
