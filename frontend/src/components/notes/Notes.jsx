import NotesStyle, { NoteDisplayStyle, NoteContentStyle, NoteWrapper, NoteBottom, NotesTitle, NotesBody } from '../../styles/components/Notes.style';
import SubTitleStyle from '../../styles/elements/SubTitle.style';
import SimpleTextStyle from '../../styles/elements/SimpleText.style';
import TitleStyle from '../../styles/elements/Title.style';
import NoteActions from './NoteActions.jsx';
import { PopOnHover, PopOnMount } from '../../styles/animations';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../../store/notes/thunks.js';
import { Menu, Status } from '../../utils/enum.js';
import { useNavigate, useParams } from 'react-router-dom';
import { appRoutes } from '../../utils/routes.js';

const Message = ({ msg }) => (
    <TitleStyle style={{ textAlign: 'center', marginTop: '5%' }}>{msg}</TitleStyle>
);

const NoteDisplay = ({ title, content, createdAt, _id }) => {
    const date = new Date(createdAt);
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    
    const redirectToNote = () => {

        navigate(appRoutes.note.replace(':id', _id));
    };

    return (
        <NoteWrapper>
            <PopOnMount>
                <PopOnHover>
                    <NoteDisplayStyle
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        onClick={redirectToNote}
                    >
                        <SubTitleStyle>{title}</SubTitleStyle>
                        <NoteContentStyle>{content}</NoteContentStyle>
                        <NoteBottom>
                            <SimpleTextStyle>{date.toLocaleDateString()}</SimpleTextStyle>
                            <NoteActions
                                style={{ opacity: hover ? '1' : '0' }}
                                noteId={_id}
                            />
                        </NoteBottom>  
                    </NoteDisplayStyle>
                </PopOnHover>
            </PopOnMount>
        </NoteWrapper>
    );
};

const Notes = ({ expectedTitle='' }) => {
    const dispatch = useDispatch();
    const { notes, fetchStatus } = useSelector((state) => state.notes);
    const { filter } = useParams();
    
    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);
    
    const favoriteNotes = filter === Menu.favorites;
    const archivedNotes = filter === Menu.archived;
    
    const notesFiltered = notes?.filter(
        ({ title, favorite, archived }) => {
            const withExpectedTitle = title
                .toLowerCase()
                .includes(expectedTitle.toLowerCase());
            
            return (
                withExpectedTitle &&
                    (
                        archivedNotes
                            ? archived
                            : !archived && (!favoriteNotes || favorite)
                    )
            );
        }
    );
    
    let message;
    if (fetchStatus === Status.loading) message = <Message msg={'Loading...'}/>;
    else if (fetchStatus === Status.error || !notesFiltered || notesFiltered.length === 0) message = <Message msg={'Empty'}/>;
    
    return (
        <NotesStyle>
            <NotesTitle>
                <TitleStyle>Your Notes</TitleStyle>
                <SimpleTextStyle>Total notes: {notesFiltered.length}</SimpleTextStyle>
            </NotesTitle>
            <NotesBody>
                {
                    !message
                        ? notesFiltered.map((value) => (
                            <NoteDisplay {...value} key={value._id}/>
                        ))
                        : message
                }
            </NotesBody>
        </NotesStyle>
    );
};

export default Notes;