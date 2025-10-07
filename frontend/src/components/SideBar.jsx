import { useState } from 'react';
import { SideBarListStyle, SideBarStyle } from '../styles/components/SideBar.style';
import { appRoutes } from '../utils/routes';
import TitleStyle from '../styles/elements/Title.style';
import { useNavigate } from 'react-router-dom';
import Button from './input/Button';

const SideBar = () => {
    const [curr, setCurr] = useState();
    const navigate = useNavigate();

    const buttons = [
        {
            label: 'All',
            to: appRoutes.home.replace(':filter', 'all'),
        },
        {
            label: 'Favorites',
            to:  appRoutes.home.replace(':filter', 'favorite')
        },
    ];

    const handleSelection = (i, to) => {
        setCurr(i);
        navigate(to);
    };
    
    return (
        <SideBarStyle>
            <TitleStyle style={{margin: '1.5rem'}}>Notebook</TitleStyle>
            <SideBarListStyle>
                {
                    buttons.map(({ label, to }, i) => (
                        <Button
                            key={label}
                            selected={i === curr}
                            onClick={() => handleSelection(i, to)}
                            text={label}
                        />
                    ))
                }
            </SideBarListStyle>
        </SideBarStyle>
    );
};

export default SideBar;