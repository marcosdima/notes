import styled from 'styled-components';

export default styled.div`
    font-weight: 500;
    font-size: ${({ theme }) => theme.font.size.title};
    color: ${({ theme }) => theme.colors.text.color};
    letter-spacing: 0.5px;
    cursor: default;
    transition: color 0.3s ease;
    width: fit-content;

    &:hover {
        color: ${({ theme }) => theme.colors.text.hover};
    }
`;