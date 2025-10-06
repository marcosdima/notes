// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/pages/home/Home';
import Note from './components/Note';
import NoteForm from './components/forms/NoteForm';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/:filter',
                element: <Home />,
            },
            {
                path: '/notes/:id',
                element: <Note />,
            },
            {
                path: '/notes/create/:id',
                element: <NoteForm />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);
export default router;
