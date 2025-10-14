import { motion } from 'motion/react';
import styled from 'styled-components';
import Button from '../ui/Button';

export const NoteUpPart = styled(motion.div)`
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2%;
    border-bottom: ${({ theme }) => theme.border.small };
    height: 10%;
`;

export const CreateButton = styled(Button)`
    border: ${({ theme }) => theme.border.smallDarkOpaque };
    color: ${({ theme }) => theme.colors.secondary };
`;

export const NotesBody = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
    padding: 2rem;
`;

export default styled(motion.div)`
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.primary};
`;