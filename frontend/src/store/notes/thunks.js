import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNotes, createNote } from './api.js';

export const fetchNotes = createAsyncThunk(
    'notes/fetch',
    async () => await getNotes(),
);

export const createANote = createAsyncThunk(
    'notes/create',
    async (data) => await createNote(data),
);