import { Outlet } from 'react-router-dom';
import AppStyle from './styles/components/App.style';

function App() {
    return (
        <AppStyle>
            <Outlet />
        </AppStyle>
    );
}

export default App;
