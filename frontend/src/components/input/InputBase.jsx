import { InputLabel, InputWrapper } from '../../styles/elements/input/Input.style';

const InputBase = ({ label, style, children }) => {
    return (
        <InputWrapper style={style}>
            { label ? <InputLabel>{label}</InputLabel> : <></> }
            { children }
        </InputWrapper>
        
    );
};

export default InputBase;