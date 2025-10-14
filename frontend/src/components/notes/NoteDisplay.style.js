import styled from 'styled-components';
import { motion } from 'motion/react';

export const NoteContentStyle = styled(motion.div)`
    min-width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
`;

export const NoteBottom = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default styled(motion.div)`
    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    cursor: pointer;
`;