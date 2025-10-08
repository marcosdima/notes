import { apiRoutes } from '../../utils/routes';
import axios from 'axios';

export const getNotes = async () => {
    try {
        const { data } = await axios.get(apiRoutes.getNotes);
        return data;
    } catch (err) {
        handleError(err);
    }
};

export const createNote = async (noteData) => {
    try {
        const { data } = await axios.post(apiRoutes.createNotes, noteData);
        return data;
    } catch (err) {
        handleError(err);
    }
};

const handleError = (err) => { throw new Error(err.response.data.error); };