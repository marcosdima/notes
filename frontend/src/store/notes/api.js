import { apiRoutes } from '../../utils/routes';
import axios from 'axios';

export const getNotes = async () => {
    try {
        const { data } = await axios.get(apiRoutes.getNotes);
        return data;
    } catch (err) {
        console.error(err);
    }
};