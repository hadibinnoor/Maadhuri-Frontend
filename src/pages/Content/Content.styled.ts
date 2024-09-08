import styled from "styled-components";

export const StyledContentContainer = styled.div`
    height: calc(100vh - 10rem);
    width: 100%;
    display: flex;
    background-color: transparent;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

/* 
    @media screen and (max-width: 1150px) {
        & {
            flex-direction: column-reverse;
            height: 200vh;
        }
    } */
`

export const StyledSequenceContainer = styled.div`
    /* position: relative; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* height: 80%; */
    width: 90%;
    /* background-color: red; */
    flex: 0.8;
`

export const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 0.2;
    width: 90%;
`

export const StyledSequence = styled.div`
    height: 100%;
    max-height: 100%;
    width: 90%;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.primary};
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
`

export const StyledAddSequence = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;


    & {
        color: ${({ theme }) => theme.text};
        font-size: 2rem;
    }
`

export const StyledSequenceNode = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.tertiary};
    height: 90%;
    max-height: 90%;
    width: 20%;
    min-width: 20%;
    margin: 0 2rem;
    border-radius: 10px;
    /* margin: 2rem 2rem; */

    /* box-shadow: 0 2px 5px black; */
`

export const SequenceHeader = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.text};
`

export const SequenceContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 90%;
    width: 100%;
`

export const AudioMetaData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: 90%;

    audio {
        width: 100%;
    }
`

export const SequenceSeperator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    color: ${({ theme }) => theme.text};
    font-size: 2rem;
`


