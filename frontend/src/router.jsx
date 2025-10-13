// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [],
    },
];

const router = createBrowserRouter(routes);
export default router;
