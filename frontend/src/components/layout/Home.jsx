import { motion } from 'motion/react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const HomeStyle = styled(motion.div)`
    width: 80%;
    height: 100%;
`;

const Home = () => {
    return (
        <HomeStyle>
            <Outlet/>
        </HomeStyle>
    );
};

export default Home;