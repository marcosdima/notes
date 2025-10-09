import { deleteNote, updateArchived, updateFavorite } from '../../store/notes/thunks';
import { PopOnHover } from '../../styles/animations';
import NoteActionsStyle from '../../styles/components/NoteActions.style';
import { Bin, Heart, Archive, ShareIos } from 'iconoir-react';
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
                <Bin
                    onClick={
                        (e) => {
                            e.stopPropagation();
                            dispatch(deleteNote(noteId));
                        }
                    }
                />
            </PopOnHover>
            <PopOnHover title={ !note.archived ? 'Archive' : 'Unarchive'}>
                <div
                    onClick={
                        (e) => {
                            e.stopPropagation();
                            dispatch(updateArchived({ noteId, asArchived: !note.archived }));
                        }
                    }
                >
                    { note.archived ? <ShareIos/> : <Archive/>}
                </div>
            </PopOnHover>
        </NoteActionsStyle>
    );
};

export default NoteActions;