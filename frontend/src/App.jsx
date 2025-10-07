import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';
import AppStyle from './styles/components/App.style';

function App() {
    return (
        <AppStyle>
            <SideBar></SideBar>
            <Outlet />
        </AppStyle>
    );
}

export default App;
