import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Note = () => {
    const { notes } = useSelector((state) => state.notes);
    const { id } = useParams();

    // If does not exists a note with the id provided...
    const note = notes.find(({ _id }) => _id === id);
    if (!note) return <></>;

    const { title, content } = note;

    return (
        <>Note: {title} - Content: {content}</>
    );
};

export default Note;