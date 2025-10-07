import styled from 'styled-components';

export default styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    border: none;
    background-color: ${({ theme, selected }) => selected ? theme.colors.primary : 'none'};
    color: ${({ theme, selected }) => selected ? theme.colors.text.selected : theme.colors.text.color};

    &:hover {
        background-color: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.secondary};
        animation: none;
        color: ${({ theme, selected }) => selected ? theme.colors.text.selected : theme.colors.text.hover}
    }
`;