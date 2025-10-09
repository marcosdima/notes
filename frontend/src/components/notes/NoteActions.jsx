import { updateArchived, updateFavorite } from '../../store/notes/thunks';
import { PopOnHover } from '../../styles/animations';
import NoteActionsStyle from '../../styles/components/NoteActions.style';
import { Bin, Heart, Archive } from 'iconoir-react';
import { useDispatch, useSelector } from 'react-redux';


const NoteActions = ({ style, noteId }) => {
    const { notes } = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    // If does not exists a note with the id provided...
    const note = notes.find(({ _id }) => _id === noteId);
    if (!note) return <></>;

    const isFavorite = { fill: note.favorite ? '#ff4444' : '' };

    return (
        <NoteActionsStyle style={style}>
            <PopOnHover title='Favorite'>
                <Heart
                    style={isFavorite}
                    onClick={
                        (e) => {
                            e.stopPropagation();
                            dispatch(updateFavorite({ noteId, asFavorite: !note.favorite }));
                        }
                    }
                />
            </PopOnHover>
            <PopOnHover title='Delete'>
                <Bin/>
            </PopOnHover>
            <PopOnHover title='Archive'>
                <Archive
                    onClick={
                        (e) => {
                            e.stopPropagation();
                            dispatch(updateArchived({ noteId, asArchived: !note.archived }));
                        }
                    }
                />
            </PopOnHover>
        </NoteActionsStyle>
    );
};

export default NoteActions;