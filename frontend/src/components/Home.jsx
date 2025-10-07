import Notes from './notes/Notes';
import TitleStyle from '../styles/elements/Title.style';
import SimpleTextStyle from '../styles/elements/SimpleText.style';
import HomeStyle, { HomeTitle } from '../styles/components/Home.style';

const Home = () => {
    return (
        <HomeStyle>
            <HomeTitle>
                <TitleStyle>Your Notes</TitleStyle>
                <SimpleTextStyle>Total notes: 5</SimpleTextStyle>
            </HomeTitle>
            <Notes></Notes>
        </HomeStyle>
    );
};

export default Home;