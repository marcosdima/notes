import { createSlice } from '@reduxjs/toolkit';
import { fetchNotes, createNote, updateFavorite, updateArchived } from './thunks.js';
import { Status } from '../../utils/enum.js';

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
        fetchError: '',
        createError: '',
        updateError: '',
        fetchStatus: Status.idle,
        createStatus: Status.idle,
        updateStatus: '',
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
            .addCase(
                fetchNotes.pending,
                (state) => {
                    state.fetchStatus = Status.loading;
                },
            )
            .addCase(
                fetchNotes.fulfilled,
                (state, action) => {
                    state.fetchStatus = Status.succeeded;
                    state.notes = action.payload;
                },
            )
            .addCase(
                fetchNotes.rejected,
                (state, action) => {
                    state.fetchStatus = Status.error;
                    state.fetchError = action.error;
                },
            )

            // createNote
            .addCase(
                createNote.pending,
                (state) => {
                    state.fetchStatus = Status.loading;
                },
            )
            .addCase(
                createNote.fulfilled,
                (state, action) => {
                    state.notes = state.notes.concat([action.payload]);
                    state.createStatus = Status.succeeded;
                },
            )
            .addCase(
                createNote.rejected,
                (state, action) => {
                    state.createStatus = Status.error;
                    state.createError = action.error.message;
                },
            )

            // updateFavorite
            .addCase(
                updateFavorite.pending,
                (state) => {
                    state.updateStatus = Status.loading;
                },
            )
            .addCase(
                updateFavorite.fulfilled,
                (state, { payload }) => {
                    state.notes = state.notes.map(
                        (note) => note._id === payload._id ? payload : note
                    );
                    state.updateStatus = Status.succeeded;
                },
            )
            .addCase(
                updateFavorite.rejected,
                (state, action) => {
                    state.updateStatus = Status.error;
                    state.updateError = action.error.message;
                },
            )

            // updateFavorite
            .addCase(
                updateArchived.pending,
                (state) => {
                    state.updateStatus = Status.loading;
                },
            )
            .addCase(
                updateArchived.fulfilled,
                (state, { payload }) => {
                    state.notes = state.notes.map(
                        (note) => note._id === payload._id ? payload : note
                    );
                    state.updateStatus = Status.succeeded;
                },
            )
            .addCase(
                updateArchived.rejected,
                (state, action) => {
                    state.updateStatus = Status.error;
                    state.updateError = action.error.message;
                },
            );
    },
});

export const { cleanStatus } = notesSlice.actions;
export default notesSlice.reducer;