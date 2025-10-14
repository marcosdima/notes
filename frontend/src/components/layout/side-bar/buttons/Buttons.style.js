import { motion } from 'motion/react';
import styled from 'styled-components';

export const ButtonStyle = styled(motion.div)`
    background-color: ${({ theme, selected }) => selected ? theme.colors.primary : 'none'};
    color: ${({ theme, selected }) => selected ? theme.colors.text.selected : theme.colors.text.color};
    font-size: ${({ theme }) => theme.font.size.xl};
    border-radius: 10px;
    text-align: center;
    padding: 2vh;
    margin: 4vh;
    cursor: pointer;
    user-select: none;
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