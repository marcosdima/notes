import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoteFormStyle, { NoteFormTitle, NoteFormUp, NoteFormBottom } from '../../styles/components/NoteForm.style';
import Input from '../input/Input';
import InputTextArea from '../input/InputTextArea';
import InputArray from '../input/InputArray';
import Button from '../input/Button';
import { createNote } from '../../store/notes/thunks';
import { Status } from '../../utils/enum';
import { addError } from '../../store/error-reducer';
import ErrorDisplayer from '../ErrorDisplayer';
import { cleanStatus } from '../../store/notes/notes-slice';

const NoteForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();

    const { createError, createStatus } = useSelector((state) => state.notes);
    
    useEffect(() => {
        if (createStatus === Status.error) {
            dispatch(addError(createError));
            dispatch(cleanStatus());
        }
    }, [dispatch, createStatus, createError]);

    const handleCreateNote = () => dispatch(createNote({ title, content, tags }));
    
    return (
        <NoteFormStyle>
            <NoteFormUp>
                <NoteFormTitle>Note Form</NoteFormTitle>
            </NoteFormUp>
            <NoteFormBottom>
                <Input
                    query={title}
                    setQuery={setTitle}
                    placeholder={'Set a title...'}
                    label={'Title'}
                />
                <InputTextArea
                    query={content}
                    setQuery={setContent}
                    placeholder={'Set a content...'}
                    label={'Content'}
                />
                <InputArray
                    query={tags}
                    setQuery={setTags}
                    placeholder={'Set a Tags...'}
                    label={'Tags'}
                />
                <Button
                    text='Create note'
                    onClick={handleCreateNote}
                />
            </NoteFormBottom>
            <ErrorDisplayer/>
        </NoteFormStyle>
    );
};

export default NoteForm;