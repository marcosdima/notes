import styled, { keyframes } from 'styled-components';

export const PopOnHover = styled.div`
    transition: transform 0.2s ease;
    &:hover {
        transform: scale(1.05) translateX(1%);
    }
`;

const popIn = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.5);
    }
    50% {
        opacity: 1;
        transform: scale(1.05) translateX(1%);
    }
    100% {
        transform: scale(1);
    }
`;

export const PopOnMount = styled.div`
    animation: ${popIn} 0.7s ease forwards;
`;