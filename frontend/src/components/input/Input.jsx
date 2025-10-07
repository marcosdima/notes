import InputStyle, { InputLabel, InputWrapper } from '../../styles/elements/input/Input.style';
import InputBase from './InputBase';

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