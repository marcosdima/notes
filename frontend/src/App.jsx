import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'motion/react';
import SideBar from './components/layout/side-bar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNotes } from './store/notes/thunks.js';

const AppStyle = styled(motion.div)`
    background: ${({theme}) => theme.colors.background};
    width: 100vw;
    height: 100vh;
    display: flex;
`;

function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);

    return (
        <AppStyle>
            <SideBar/>
            <Outlet/>
        </AppStyle>
    );
}

export default App;
