import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notes/notes-slice.js';

export const store = configureStore({
    reducer: {
        notes: notesReducer,
    },
});
