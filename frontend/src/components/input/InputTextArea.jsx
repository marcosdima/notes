import { InputLabel, InputWrapper } from '../../styles/elements/input/Input.style';
import InputTextAreaStyle from '../../styles/elements/input/InputTextArea.style';
import InputBase from './InputBase';

const Input = ({ label, query, setQuery, placeholder, style }) => {
    return (
        <InputBase style={style} label={label}>
            <InputTextAreaStyle
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </InputBase>
        
    );
};

export default Input;