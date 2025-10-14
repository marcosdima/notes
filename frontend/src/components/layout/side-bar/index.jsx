import Title from '../../ui/Title';
import SideBarStyle from './SideBar.style';
import Buttons from './buttons';

const SideBar = () => {
    return (
        <SideBarStyle>
            <Title>Notebook</Title>
            <Buttons />
        </SideBarStyle>
    );
};

export default SideBar;