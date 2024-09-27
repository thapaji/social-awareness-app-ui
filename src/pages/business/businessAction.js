import { toast } from 'react-toastify';

import { setAdvertisements } from './businessSlice';
import { addAdvertisementAPI, deleteAdvertisementAPI, fetchAdvertisementsAPI, updateAdvertisementAPI } from './businessAxios';

export const getAdvertisements = () => async (dispatch) => {
    try {
        const { status, data } = await fetchAdvertisementsAPI();
        if (status === 'success') {
            dispatch(setAdvertisements(data.advertisements));
        } else {
            toast.error('Failed to fetch advertisements');
        }
    } catch (error) {
        toast.error('An error occurred while fetching advertisements');
    }
};

export const createAdvertisement = (advertisement) => async (dispatch) => {
    try {
        const { status, data } = await addAdvertisementAPI(advertisement);
        if (status === 'success') {
            dispatch(getAdvertisements());
            toast.success(data.message || 'Advertisement created successfully. Wait for Admin to activate this add before it shows up.');
        } else {
            toast.error('Failed to create advertisement');
        }
    } catch (error) {
        toast.error('An error occurred while creating advertisement');
    }
};

export const updateAdvertisement = (id, advertisement, showToast) => async (dispatch) => {
    try {
        const { status, message } = await updateAdvertisementAPI(id, advertisement);
        if (status === 'success') {
            dispatch(getAdvertisements());
            showToast && toast.success(message || 'Advertisement updated successfully');
        } else {
            toast.error(message || 'Failed to update advertisement');
        }
    } catch (error) {
        toast.error(message || 'An error occurred while updating advertisement');
    }
};

export const deleteAdvertisement = (id) => async (dispatch) => {
    try {
        const { status } = await deleteAdvertisementAPI(id);
        if (status === 'success') {
            dispatch(getAdvertisements());
            toast.success('Advertisement deleted successfully');
        } else {
            toast.error('Failed to delete advertisement');
        }
    } catch (error) {
        toast.error('An error occurred while deleting advertisement');
    }
};
