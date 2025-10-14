import styled from 'styled-components';
import { motion } from 'motion/react';

const TitleStyle = styled(motion.div)`
    font-size: ${({ theme }) => theme.font.size.title};
    cursor: pointer;
    padding: 1rem;
    width: fit-content;
    user-select: none;
`;

const Title = ({ children }) => (
    <TitleStyle
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1, scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: 'spring', duration: 0.4 }}
    >
        {children}
    </TitleStyle>
);

export default Title;
