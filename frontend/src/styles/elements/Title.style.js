import styled from 'styled-components';

export default styled.h1`
    font-weight: 500;
    font-size: ${({ theme }) => theme.font.size.title};
    color: ${({ theme }) => theme.colors.text.color};
    text-align: left;
    margin: 1rem;
    letter-spacing: 0.5px;
    cursor: default;
    user-select: none;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.text.hover};
    }
`;