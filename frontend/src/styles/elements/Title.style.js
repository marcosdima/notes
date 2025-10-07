import styled from 'styled-components';

export default styled.div`
    font-weight: 500;
    font-size: ${({ theme }) => theme.font.size.title};
    color: ${({ theme }) => theme.colors.text.color};
    text-align: left;
    letter-spacing: 0.5px;
    cursor: default;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.text.hover};
    }
`;