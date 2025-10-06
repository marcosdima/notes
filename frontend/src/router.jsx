// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import { appRoutes } from './utils/routes';
import App from './App';
import Home from './components/Home';
import Note from './components/notes/Note';
import NoteForm from './components/forms/NoteForm';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: appRoutes.home,
                element: <Home />,
            },
            {
                path: appRoutes.note,
                element: <Note />,
            },
            {
                path: appRoutes.noteForm,
                element: <NoteForm />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);
export default router;
