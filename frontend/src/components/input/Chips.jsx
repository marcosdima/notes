import { useState } from 'react';
import ChipsStyle, { ChipDelete, ChipStyle } from '../../styles/components/Chips.style';

const Chip = ({ text, onDelete }) => {
    const [hover, setHover] = useState(false);

    return (
        <ChipStyle
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {text}
            <ChipDelete
                style={{ display: hover ? '' : 'none' }}
                onClick={onDelete}
            >
                x
            </ChipDelete>
        </ChipStyle>
    );
};

const Chips = ({ arr, updateArr }) => {
    return (
        <ChipsStyle>
            {
                arr.map(
                    (text) => (
                        <Chip
                            text={text}
                            onDelete={
                                () => updateArr(
                                    arr.filter((val) => val !== text)
                                )
                            }
                        />
                    )
                )
            }
        </ChipsStyle>
    );
};

export default Chips;