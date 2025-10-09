import { createSlice } from '@reduxjs/toolkit';
import { fetchNotes, createANote } from './thunks.js';
import { Status } from '../../utils/enum.js';

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
        fetchError: '',
        createError: '',
        fetchStatus: Status.idle,
        createStatus: Status.idle,
    },
    reducers: {
        cleanStatus: (state) => {
            state.fetchStatus = Status.idle;
            state.createStatus = Status.idle;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder
            // fetchNotes
            .addCase(fetchNotes.pending, (state) => {
                state.fetchStatus = Status.loading;
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.fetchStatus = Status.succeeded;
                state.notes = action.payload;
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.fetchStatus = Status.error;
                state.fetchError = action.error;
            })

            // createNote
            .addCase(createANote.pending, (state) => {
                state.fetchStatus = Status.loading;
            })
            .addCase(
                createANote.fulfilled,
                (state, action) => {
                    state.notes = state.notes.concat([action.payload]);
                    state.createStatus = Status.succeeded;
                })
            .addCase(createANote.rejected, (state, action) => {
                state.createStatus = Status.error;
                state.createError = action.error.message;
            });
    },
});

export const { cleanStatus } = notesSlice.actions;
export default notesSlice.reducer;