import styled from "styled-components"

export const StyledValidateContainer = styled.div`
    height: calc(100vh - 10rem);
    width: 100%;
    display: flex;
    background-color: transparent;
    position: relative;

    display: flex;
    flex-direction: row;
    

/* 
    @media screen and (max-width: 1150px) {
        & {
            flex-direction: column-reverse;
            height: 200vh;
        }
    } */
`

export const StyledValidateLeft = styled.div`
    display: flex;
    flex: 0.3;
    height: 100%;
    /* background-color: red; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledValidateRight = styled.div`
    display: flex;
    flex: 0.7;
    height: 100%;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledValidateLeftParameters = styled.div`
    height: 100%;
    border-radius: 30px;
    width: 100%;
    max-height: 100%;
    min-height: 80%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
`

export const StyledParametersHeading = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 1rem 3rem 0rem 3rem;
`

export const StyledParametersInfo = styled.div`

`


export const StyledParametersHeadingText = styled.div<{ color?: string }>`
    color: ${(props) => props.color ? props.theme.accent1 : props.theme.text};
    text-shadow: 0 0 5px black;
`

export const StyledValidateLeftToggle = styled.div`
    height: 10%;
    background-color: ${({ theme }) => theme.secondary};
    width: 80%;
    margin-left: 2rem;
    border-radius: 30px;
    /* margin: 2rem 0; */
    margin-bottom: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const ToggleBtn = styled.button<{ selected: 'true' | 'false' }>`
    border: none;       
    text-decoration: none;
    height: 100%;
    width: 100%;
    /* padding: 0 3rem; */
    /* width: 80%; */
    /* border-radius: 30px; */
    font-size: 1.1rem;
    /* margin: 1rem 0; */
    background-color: ${(props) => props.selected == 'true' ? props.theme.accent1 : 'rgb(133, 133, 133)'};

    transition: background-color 0.3s ease;
`



export const StyledLLMOutputContainer = styled.div`
    height: 90%;
    width: 85%;
    background-color: ${({ theme }) => theme.tertiary};
    border-radius: 30px;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    /* box-shadow: 0 0 15px 1px ${({ theme }) => theme.accent1}; */

`

export const StyledLLMScoreContainer = styled.div`
    height: 30%;
    width: 100%;
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 30px;
    width: 85%;
    margin-bottom: 3rem;

`

export const StyledTextArea = styled.textarea`
    height: 90%;
    overflow-y: auto;
    width: 100%;
    font-size: 1rem;
    margin: 1.4rem 0;
    padding: 1rem 1rem;
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

export const LLMOutput = styled(StyledTextArea)`
    height: 90%;
    overflow-y: scroll;
    width: 90%;
    font-size: 1.3rem;
    margin: 1.4rem 0;
    padding: 1rem 2rem;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0.6);
    color: rgba(255, 255, 255, 0.8);
    border-radius: 30px;
    resize: none;

    border: 1px solid transparent;
    /* &:hover {
        border: 1px solid ${(props) => props.theme.accent1};
    } */

    transition: border 0.5s ease;
`



export const ValidateBtnContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;
`

export const LLMValidateBtn = styled.button`
    border: none;       
    text-decoration: none;
    padding: 0.5rem 3rem;
    border-radius: 30px;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.text};
    background-color: ${(props) => props.theme.accent2};

    transition: background-color 0.3s ease;

`

export const StyledGenerateBtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-right: 2rem;
`
export const LLMOutputPlaceholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const LLMOutputPlaceholderText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    color: ${({ theme }) => theme.text};
`

export const StyledParametersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    height: 90%;
    width: 80%;
    margin-bottom: 3rem;
    background-color: ${({ theme }) => theme.tertiary};
    border-radius: 30px;
    margin-left: 2rem;
`