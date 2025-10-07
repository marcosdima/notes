import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNotes } from './api.js';

export const fetchNotes = createAsyncThunk(
    'groups/fetch',
    async () => await getNotes(),
);