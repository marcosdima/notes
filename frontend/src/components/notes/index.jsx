import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../ui/input/Input';
import NotesStyle, { CreateButton, NoteUpPart, NotesBody } from './Notes.style';
import { useSelector } from 'react-redux';
import { Menu, Status } from '../../utils/enum.js';
import Title from '../ui/Title.jsx';
import NoteDisplay from './NoteDisplay.jsx';

const notesVariants = {
    disappear: { opacity: 0 },
    appear: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 1,
        },
    },
};

const Message = ({ msg }) => (
    <Title
        style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '5%' }}
        exit={{ scale: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
        {msg}
    </Title>
);

const Notes = () => {
    const { filter } = useParams();
    const [query, setQuery] = useState('');
    const { notes, fetchStatus } = useSelector((state) => state.notes);

    const favoriteNotes = filter === Menu.favorites;
    const archivedNotes = filter === Menu.archived;
    
    const notesFiltered = notes?.filter(
        ({ title, favorite, archived }) => {
            const withExpectedTitle = title
                .toLowerCase()
                .includes(query.toLowerCase());
            
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
            <NoteUpPart>
                <Input
                    query={query}
                    setQuery={setQuery}
                    placeholder="Find notes..."
                />
                <CreateButton>Create</CreateButton>
            </NoteUpPart>
            {
                message
                    ? message
                    : <NotesBody initial='disappear' animate='appear' variants={notesVariants}>
                        {
                            notesFiltered.map((value) => (
                                <NoteDisplay {...value} key={value._id} />
                            ))
                        }
                    </NotesBody>
            }
        </NotesStyle>
    );
};

export default Notes;
