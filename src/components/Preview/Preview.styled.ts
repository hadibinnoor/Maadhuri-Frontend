import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import { FaEye } from "react-icons/fa";


export const StyledPreviewContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 0;

`

export const StyledPreviewNode = styled.div`
    display: flex;
    width: 95%;
    height: 25%;
    /* max-height: 20%; */
    /* max-width: 80%; */
    background-color: ${({ theme }) => theme.primary};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 0 2px 1px black;

    &:hover {
        transform: scale(1);
    }
`

export const StyledPreviewNodeLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
    border-radius: 30px;
    flex-direction: column;
    text-align: left;

`

export const StyledPreviewNodeRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    /* background-color: red; */
    height: 100%;
    border-radius: 30px;
`

export const StyledEditIcon = styled(FaEye)`
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    margin: 0 2rem 0 1rem;

    &:hover {
        cursor: pointer;
    }
`

export const StyledCircularProgress = styled(CircularProgress)`
    color: ${({ theme }) => theme.accent2};
`

export const StyledPreviewTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 3rem;
    color: ${({ theme }) => theme.text};
    font-size: 1.4rem;

`

export const StyledPreviewInfo = styled.div<{ txtcolor?: string}>`
    /* display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 3rem; */
    margin-left: 3rem;

    color: ${(props) => props.txtcolor || props.theme.text};
    font-size: 0.9rem;
    line-height: 2rem;
`

export const StyledLLMOutput = styled.textarea`
/* height: 50%; */
min-height: 60%;
overflow-y: scroll;
width: 90%;
font-size: 1.3rem;
margin: 1.4rem 0;
padding: 1rem 2rem;
border: none;
outline: none;
background-color: rgba(0, 0, 0, 0.6);
color: rgba(255, 255, 255, 0.8);
border-radius: 10px;
resize: none;

border: 1px solid transparent;
/* &:hover {
    border: 1px solid ${(props) => props.theme.accent1};
} */

transition: border 0.5s ease;
`

export const StyledValidateText = styled.div`
    color: ${({ theme }) => theme.text};

`

export const StyledCard = styled.div`
    display: flex;
    height: 100%;
    border-radius: 30px;
    background-color: red;
    width: calc(100% / 3);
    margin: 0 1rem;
`