export const apiRoutes = Object.freeze({
    getNotes: '/api/notes',
});

export const appRoutes = Object.freeze({
    home: '/:filter',
    note: '/notes/:id',
    noteForm: '/notes/form/:id',
});