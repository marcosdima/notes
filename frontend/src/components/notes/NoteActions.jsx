import { PopOnHover } from '../../styles/animations';
import NoteActionsStyle from '../../styles/components/NoteActions.style';
import { Bin, Heart, Archive } from 'iconoir-react';

const NoteActions = ({ style }) => {
    return (
        <NoteActionsStyle style={style}>
            <PopOnHover title='Favorite'>
                <Heart/>
            </PopOnHover>
            <PopOnHover title='Delete'>
                <Bin/>
            </PopOnHover>
            <PopOnHover title='Archive'>
                <Archive/>
            </PopOnHover>
        </NoteActionsStyle>
    );
};

export default NoteActions;