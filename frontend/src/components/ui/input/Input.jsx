import InputBase from './InputBase';
import styled from 'styled-components';

const InputStyle = styled.input`
    height: 100%;
    padding: 2rem;
    margin: 1.5rem;
    border: none;
    outline: ${({ theme }) => theme.border.smallDarkOpaque };
    border-radius: 10px;
    font-size: ${({ theme }) => theme.font.size.xl};
    color: ${({ theme }) => theme.colors.text.color};
    background: ${({ theme }) => theme.colors.background};
    transition: outline 0.3s ease;

    &:focus {
        outline: ${({ theme }) => theme.border.smallDark };
    }
`;

const Input = ({ label, style, query, setQuery, placeholder }) => {
    return (
        <InputBase style={style} label={label}>
            <InputStyle
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </InputBase>
    );
};

export default Input;