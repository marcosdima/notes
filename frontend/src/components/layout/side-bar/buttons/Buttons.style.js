import { motion } from 'motion/react';
import styled from 'styled-components';
import Button from '../../../ui/Button';

export const ButtonStyle = styled(Button)`
    margin: 4vh;
`;

export const LineStyle = styled(motion.div)`
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    width: 70%;
    height: 0.3rem;
    margin: auto;
`;

export default styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    border-top: ${({ theme }) => theme.border.small};
`;