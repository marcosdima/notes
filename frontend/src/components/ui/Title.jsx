import styled from 'styled-components';
import { motion } from 'motion/react';

const TitleStyle = styled(motion.div)`
    font-size: ${({ theme }) => theme.font.size.title};
    cursor: pointer;
    padding: 1rem;
    width: fit-content;
    user-select: none;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.text.hover};
    }
`;

const Title = ({ children }) => (
    <TitleStyle
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: 'spring', duration: 0.4 }}
    >
        {children}
    </TitleStyle>
);

export default Title;
