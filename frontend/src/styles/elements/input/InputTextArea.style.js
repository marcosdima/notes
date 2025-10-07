import styled from 'styled-components';

export default styled.textarea`
    padding: 8px 12px;
    width: 100%;
    min-height: 100px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.color};
    background: ${({ theme }) => theme.colors.background};
    transition: outline 0.1s ease;
    resize: vertical;
    font-family: ${({ theme }) => theme.font.family};

    &:focus {
        outline: ${({ theme }) => theme.border.smallDark };
    }
`;