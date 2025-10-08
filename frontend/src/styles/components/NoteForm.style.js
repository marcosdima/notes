import styled from 'styled-components';
import TitleStyle from '../elements/Title.style';

export const NoteFormTitle = styled(TitleStyle)`
    text-align: center;
`;

export default styled.div`
    width: 100%;
    padding: 3rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: left;
    background: ${({ theme }) => theme.colors.primary };
`;
