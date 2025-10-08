import styled from 'styled-components';

export const ChipDelete = styled.div`
    font-weight: 700;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.hover};

    &:hover {
        color: ${({ theme }) => theme.colors.text.color};
    }
`;

export const ChipStyle = styled.div`
    background: ${({ theme }) => theme.colors.background };
    padding: 0.5rem;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

export default styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-start;
    padding: 1rem;
`;
