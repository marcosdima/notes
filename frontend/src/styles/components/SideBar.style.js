import styled from 'styled-components';

export const SideBarButtonStyle = styled.div`
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    background-color: ${({ theme, selected }) => selected ? theme.colors.primary : 'none'};
    color: ${({ theme, selected }) => selected ? theme.colors.text.selected : theme.colors.text.color};

    &:hover {
        background-color: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.secondary};
        animation: none;
        color: ${({ theme, selected }) => selected ? theme.colors.text.selected : theme.colors.text.hover}
    }
`;

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