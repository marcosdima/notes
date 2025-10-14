import { deleteNote, updateArchived, updateFavorite } from '../../store/notes/thunks';
import { Bin, Heart, Archive, ShareIos } from 'iconoir-react';
import { motion } from 'motion/react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const NoteActionsStyle = styled(motion.div)`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const NoteActions = ({ noteId, ...props }) => {
    const { notes } = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    // If does not exists a note with the id provided...
    const note = notes.find(({ _id }) => _id === noteId);
    if (!note) return <></>;

    const isFavorite = { fill: note.favorite ? '#ff4444' : '' };

    return (
        <NoteActionsStyle {...props}>
            <Heart
                title='Favorite'
                style={isFavorite}
                onClick={
                    (e) => {
                        e.stopPropagation();
                        dispatch(updateFavorite({ noteId, asFavorite: !note.favorite }));
                    }
                }
            />
            <Bin
                title='Delete'
                onClick={
                    (e) => {
                        e.stopPropagation();
                        dispatch(deleteNote(noteId));
                    }
                }
            />
            <div
                title={ !note.archived ? 'Archive' : 'Unarchive'}
                onClick={
                    (e) => {
                        e.stopPropagation();
                        dispatch(updateArchived({ noteId, asArchived: !note.archived }));
                    }
                }
            >
                { note.archived ? <ShareIos/> : <Archive/>}
            </div>
        </NoteActionsStyle>
    );
};

export default NoteActions;
