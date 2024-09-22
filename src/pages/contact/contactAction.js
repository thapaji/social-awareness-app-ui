import { toast } from 'react-toastify';
import {
    fetchMessages as fetchMessagesAPI,
    addMessage as addMessageAPI,
    updateMessage as updateMessageAPI,
    deleteMessage as deleteMessageAPI
} from './contactAxios';
import { setMessages } from './contactSlice';

export const getMessages = () => async (dispatch) => {
    try {
        const { status, data } = await fetchMessagesAPI();
        if (status === 'success') {
            dispatch(setMessages(data.messages));
        } else {
            toast.error('Failed to fetch messages');
        }
    } catch (error) {
        toast.error('An error occurred while fetching messages');
    }
};

export const createMessage = (message) => async (dispatch) => {
    try {
        const { status } = await addMessageAPI(message);
        if (status === 'success') {
            dispatch(getMessages());
            toast.success('Message sent successfully');
        } else {
            toast.error('Failed to send message');
        }
    } catch (error) {
        toast.error('An error occurred while sending message');
    }
};

export const modifyMessage = (id, message, showToast) => async (dispatch) => {
    try {
        const { status } = await updateMessageAPI(id, message);
        if (status === 'success') {
            dispatch(getMessages());
            showToast && toast.success('Message updated successfully');
        } else {
            toast.error('Failed to update message');
        }
    } catch (error) {
        toast.error('An error occurred while updating message');
    }
};

export const removeMessage = (id) => async (dispatch) => {
    try {
        const { status } = await deleteMessageAPI(id);
        if (status === 'success') {
            dispatch(getMessages()); // Refresh the list
            toast.success('Message deleted successfully');
        } else {
            toast.error('Failed to delete message');
        }
    } catch (error) {
        toast.error('An error occurred while deleting message');
    }
};
