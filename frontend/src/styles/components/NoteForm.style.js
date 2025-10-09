import styled from 'styled-components';
import TitleStyle from '../elements/Title.style';

export const NoteFormTitle = styled(TitleStyle)`
    text-align: center;
    padding-top: 2rem;
    padding-left: 2rem;
`;

export const NoteFormBottom = styled.div`
    padding-top: 1rem;
    padding-left: 5rem;
    padding-right: 5rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
`;

export const NoteFormUp = styled.div`
    border-bottom: ${({ theme }) => theme.border.small };
`;

export default styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors.primary };
    overflow: auto;
`;
