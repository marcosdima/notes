import styled from 'styled-components';

const InputLabel = styled.div`
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

const InputWrapper = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

const InputBase = ({ label, style, children }) => {
    return (
        <InputWrapper style={style}>
            { label ? <InputLabel>{label}</InputLabel> : <></> }
            { children }
        </InputWrapper>
        
    );
};

export default InputBase;