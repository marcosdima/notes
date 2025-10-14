import { useNavigate, useParams } from 'react-router-dom';
import { Menu } from '../../../../utils/enum.js';
import { appRoutes } from '../../../../utils/routes.js';
import ButtonsStyle, { ButtonStyle, LineStyle } from './Buttons.style.js';
import { useState } from 'react';

const SideBarButton = ({ label, mouseOn, ...props }) => {
    return (
        <ButtonStyle
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
    const { filter } = useParams();

    const buttons = Object.values(Menu).map(
        (str) => ({
            label: str.charAt(0).toUpperCase() + str.slice(1),
            to: str,
        })
    );

    const onClick = (to) =>  navigate(appRoutes.notes.replace(':filter', to));

    const arr = buttons.map(({ label, to }, index) => (
        <SideBarButton
            onMouseEnter={() => updateMouseOn(index)}
            onClick={() => onClick(to)}
            mouseOn={mouseOn === index}
            selected={filter === to}
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