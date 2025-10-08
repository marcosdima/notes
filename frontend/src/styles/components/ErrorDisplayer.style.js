import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

export default styled.div`
    width: 70%;
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    margin: 0 auto;
  
    
    &.slide-down {
        animation: ${slideDown} 0.4s ease forwards;
    }
`;
