import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './api.js';

export const fetchNotes = createAsyncThunk(
    'notes/fetch',
    async () => await api.getNotes(),
);

export const createNote = createAsyncThunk(
    'notes/create',
    async (data) => await api.createNote(data),
);

export const updateFavorite = createAsyncThunk(
    'notes/updateFavorite',
    async ({ noteId, asFavorite }) => await api.updateFavorite(noteId, asFavorite),
);

export const updateArchived = createAsyncThunk(
    'notes/updateArchived',
    async ({ noteId, asArchived }) => await api.updateArchived(noteId, asArchived),
);

export const deleteNote = createAsyncThunk(
    'notes/deleteNote',
    async (noteId) => await api.deleteNote(noteId),
);