import { useState } from 'react';
import { SideBarListStyle, SideBarButtonStyle, SideBarStyle } from '../styles/components/SideBar.style';
import { appRoutes } from '../utils/routes';
import TitleStyle from '../styles/elements/Title.style';
import { useNavigate } from 'react-router-dom';

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
            <div style={{margin: '1.5rem'}}>
                <TitleStyle>Notebook</TitleStyle>
            </div>
            <SideBarListStyle>
                {
                    buttons.map(({ label, to }, i) => (
                        <SideBarButtonStyle key={label} selected={i === curr} onClick={() => handleSelection(i, to)}>
                            {label}
                        </SideBarButtonStyle>
                    ))
                }
            </SideBarListStyle>
        </SideBarStyle>
    );
};

export default SideBar;