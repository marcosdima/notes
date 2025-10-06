import styled from 'styled-components';

export const PopOnHover = styled.div`
    transition: transform 0.2s ease;
    &:hover {
        transform: scale(1.05) translateX(1%);;
    }
`;