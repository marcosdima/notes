import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../utils/routes';
import Button from '../input/Button';

const CreateNote = () => {
    const navigate = useNavigate();
    return (
        <Button
            onClick={() => navigate(appRoutes.noteForm)}
            text='Create'
            style={{margin: '1rem'}}
        />
    );
};

export default CreateNote;