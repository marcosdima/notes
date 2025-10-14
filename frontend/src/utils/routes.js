export const apiRoutes = Object.freeze({
    getNotes: '/api/notes',
    createNotes: '/api/notes',
    favorite: '/api/notes/:noteId/favorite',
    unfavorite: '/api/notes/:noteId/unfavorite',
    archive: '/api/notes/:noteId/archive',
    unarchive: '/api/notes/:noteId/unarchive',
    deleteNote: '/api/notes/:noteId'
});

export const appRoutes = Object.freeze({
    home: '/',
    notes: '/notes/:filter',
    note: '/notes/note/:id',
    noteForm: '/notes/form/:id',
});