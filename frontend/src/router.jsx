// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { appRoutes } from './utils/routes';
import Home from './components/layout/Home';
import Notes from './components/notes';

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: appRoutes.home,
                element: <Home/>,
                children: [
                    {
                        path: appRoutes.notes,
                        element: <Notes/>
                    },
                ],
            },
        ],
    },
];

const router = createBrowserRouter(routes);
export default router;
