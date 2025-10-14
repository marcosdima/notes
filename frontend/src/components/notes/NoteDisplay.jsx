import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../utils/routes';
import Title from '../ui/Title';
import NoteDisplayStyle, { NoteContentStyle, NoteBottom } from './NoteDisplay.style';
import NoteActions from '../ui/NoteActions';
import { animate, scale, stagger } from 'motion';

const displayAnimations = {
    whileHover: 'hover',
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    variants: {
        hover: {
            scale: 1.2,
        },
    },
};

const NoteDisplay = ({ title, content, createdAt, _id, ...props }) => {
    const date = new Date(createdAt);
    const navigate = useNavigate();
    
    const redirectToNote = () => {
        //navigate(appRoutes.note.replace(':id', _id));
    };

    return (
        <NoteDisplayStyle
            onClick={redirectToNote}
            layoutId={_id}
            {...displayAnimations}
            {...props}
        >
            <Title style={{ fontSize: '2rem' }}>{title}</Title>
            <NoteContentStyle>{content}</NoteContentStyle>
            <NoteBottom>
                <div>{date.toLocaleDateString()}</div>
                <NoteActions
                    noteId={_id}
                    initial={{ opacity: 0 }}
                    variants={{ hover: { opacity: 1 } }}
                />
            </NoteBottom>  
        </NoteDisplayStyle>
    );
};

export default NoteDisplay;