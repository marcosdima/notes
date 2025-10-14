import { useNavigate } from 'react-router-dom';
import { Menu } from '../../../utils/enum.js';
import { appRoutes } from '../../../utils/routes.js';
import ButtonsStyle, { ButtonStyle, LineStyle } from './Buttons.style.js';
import { useState } from 'react';

const Button = ({ label, mouseOn, ...props }) => {
    return (
        <ButtonStyle
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            
            {...props}
        >
            {label}
            {
                mouseOn 
                    ? <LineStyle layoutId='line'/>
                    : undefined
            }
        </ButtonStyle>
    );
};

const Buttons = () => {
    const navigate = useNavigate();
    const [mouseOn, updateMouseOn] = useState(0);
    const [selected, updateSelected] = useState(0);

    const buttons = Object.values(Menu).map(
        (str) => ({
            label: str.charAt(0).toUpperCase() + str.slice(1),
            to: appRoutes.home.replace(':filter', str),
        })
    );

    const onClick = (index, to) => {
        updateSelected(index);
        //navigate(to);
    };

    const arr = buttons.map(({ label, to }, index) => (
        <Button
            onMouseEnter={() => updateMouseOn(index)}
            onClick={() => onClick(index, to)}
            selected={selected === index}
            mouseOn={mouseOn === index}
            label={label}
            key={index}
        />
    ));

    return (
        <ButtonsStyle>
            {arr}
        </ButtonsStyle>
    );
};

export default Buttons;