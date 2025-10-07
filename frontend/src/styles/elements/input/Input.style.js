import styled from 'styled-components';

export const InputLabel = styled.div`
    font-weight: 300;
    font-size: ${({ theme }) => theme.font.size.xl};
    color: ${({ theme }) => theme.colors.text.color};
    letter-spacing: 0.5px;
    cursor: default;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.text.hover};
    }
`;

export const InputWrapper = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export default styled.input`
    padding: 8px 12px;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.color};
    background: ${({ theme }) => theme.colors.background};
    transition: outline 0.1s ease;

    &:focus {
        outline: ${({ theme }) => theme.border.smallDark };
    }
`;
