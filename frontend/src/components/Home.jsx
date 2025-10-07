import Notes from './notes/Notes';
import TitleStyle from '../styles/elements/Title.style';
import SimpleTextStyle from '../styles/elements/SimpleText.style';
import HomeStyle, { HomeTitle, HomeUpPart } from '../styles/components/Home.style';
import { useState } from 'react';
import CreateNote from './notes/CreateNote';
import Input from './input/Input';

const Home = () => {
    const [query, setQuery] = useState('');

    return (
        <HomeStyle>
            <HomeUpPart>
                <Input
                    query={query}
                    setQuery={setQuery}
                    placeholder="Find notes..."
                />
                <CreateNote />
            </HomeUpPart>
            <HomeTitle>
                <TitleStyle>Your Notes</TitleStyle>
                <SimpleTextStyle>Total notes: 5</SimpleTextStyle>
            </HomeTitle>
            <Notes expectedContent={query}></Notes>
        </HomeStyle>
    );
};

export default Home;