import { motion } from 'motion/react';
import styled from 'styled-components';

const ButtonStyle = styled(motion.div)`
    background-color: ${({ theme, selected }) => selected ? theme.colors.primary : 'none'};
    color: ${({ theme, selected }) => selected ? theme.colors.text.selected : theme.colors.text.color};
    font-size: ${({ theme }) => theme.font.size.xl};
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    transition: color 0.3s ease;
    padding: 2vh;
    margin: auto;

    &:hover {
        color: ${({ theme, selected }) => selected ? theme.colors.text.selected : theme.colors.text.hover};
    }
`;

const Button = ({ children, selected, ...props }) => {
    return (
        <ButtonStyle
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            selected={selected}
            {...props}
        >
            {children}
        </ButtonStyle>
    );
};

export default Button;
