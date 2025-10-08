import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notes/notes-slice.js';
import errorReducer from './error-reducer.js';

export const store = configureStore({
    reducer: {
        notes: notesReducer,
        errors: errorReducer,
    },
});
