import styled from 'styled-components';

export const NoteDisplayStyle = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    cursor: pointer;
`;

export const NoteWrapper = styled.div`
    width: 30%;
    height: 30%;
    min-width: 350px;
    min-height: 300px;
`;

export const NoteContentStyle = styled.div`
    max-width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* cantidad de líneas visibles */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
`;

export const NoteBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


export default styled.div`
    padding: 2rem;
    min-width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
`;