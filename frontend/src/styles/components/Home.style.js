import styled from 'styled-components';

export const HomeUpPart = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1%;
    border-bottom: ${({ theme }) => theme.border.small };
`;

export default styled.div`
    background: ${({ theme }) => theme.colors.primary };
    display: flex;
    flex-direction: column;
    width: 100%;
`;

