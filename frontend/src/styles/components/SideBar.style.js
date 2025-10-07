import styled from 'styled-components';

export const SideBarListStyle = styled.div`
    border-top: ${({ theme }) => theme.border.small };
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const SideBarStyle = styled.div`
    border-right: ${({ theme }) => theme.border.small };
`;