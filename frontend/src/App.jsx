import { Link, Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';

function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/notes/a">Note</Link>
                <Link to="/notes/create/a">Create Note</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default App;
