import { motion } from 'motion/react';
import styled from 'styled-components';

export default styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    border-right: ${({ theme }) => theme.border.small};
`;