import { apiRoutes } from '../../utils/routes';
import axios from 'axios';

const getNotes = async () => {
    try {
        const { data } = await axios.get(apiRoutes.getNotes);
        return data;
    } catch (err) {
        handleError(err);
    }
};

const createNote = async (noteData) => {
    try {
        const { data } = await axios.post(apiRoutes.createNotes, noteData);
        return data;
    } catch (err) {
        handleError(err);
    }
};

const updateFavorite = async (id, asFavorite) => {
    try {
        const route = asFavorite ? apiRoutes.favorite : apiRoutes.unfavorite;
        const { data } = await axios.put(route.replace(':noteId', id));
        return data;
    } catch (err) {
        handleError(err);
    }
};

const updateArchived = async (id, asArchived) => {
    try {
        const route = asArchived ? apiRoutes.archive : apiRoutes.unarchive;
        const { data } = await axios.put(route.replace(':noteId', id));
        return data;
    } catch (err) {
        handleError(err);
    }
};

const handleError = (err) => { throw new Error(err.response.data.error); };

export default {
    getNotes,
    createNote,
    updateFavorite,
    updateArchived,
};