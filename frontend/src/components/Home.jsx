import Notes from './notes/Notes';
import HomeStyle, { HomeUpPart } from '../styles/components/Home.style';
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
            <Notes expectedTitle={query} />
        </HomeStyle>
    );
};

export default Home;