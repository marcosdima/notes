import SimpleTextStyle from '../../styles/elements/SimpleText.style';
import InputArrayStyle from '../../styles/elements/input/InputArray.style';
import InputBase from './InputBase';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import Chips from './Chips';

const InputArray = ({ label, style, query, setQuery, placeholder }) => {
    const [string, setString] = useState('');

    const handleClick = () => {
        if (string) {
            setQuery(query.concat([string]));
            setString('');
        }
    };
    
    return (
        <InputBase style={style} label={label}>
            <InputArrayStyle>
                <Input
                    placeholder={placeholder}
                    query={string}
                    setQuery={setString}
                />
                <Button
                    text='Add'
                    onClick={handleClick}
                    disabled={string === '' || query.includes(string)}
                />
            </InputArrayStyle>
            <Chips arr={query} updateArr={setQuery}/>
        </InputBase>
    );
};

export default InputArray;