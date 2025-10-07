import styled from 'styled-components';

export const HomeTitle = styled.div`
    padding-left: 2rem;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
`;

export const HomeUpPart = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2%;
    border-bottom: ${({ theme }) => theme.border.small };
`;

export default styled.div`
    background: ${({ theme }) => theme.colors.primary };
    height: 100%;
    width: 100%;
    overflow: auto;
`;

