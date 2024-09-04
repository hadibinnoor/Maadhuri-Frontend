import styled from "styled-components";

export const StyledLoginContainer = styled.div`
    height: calc(100vh - 10rem);
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.primary};
    position: relative;

    display: flex;
    flex-direction: row;
    


    @media screen and (max-width: 1150px) {
        & {
            flex-direction: column-reverse;
            height: 200vh;
        }
    }
`

export const StyledLoginLeft = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    /* background-color: red; */

`

export const StyledLoginRight = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    padding-bottom: 5rem;


    @media screen and (max-width: 1150px) {
        & {
            /* height: 200vh; */
        }
    }
    

`

export const StyledHorizontalDivider = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    display: none;

    @media screen and (max-width: 1150px) {
        & {
            display: flex;
        }
    }

    & > div {
        border-image: linear-gradient(to right, red, purple) 1;
        border-radius: 5px; /* this doesn't work */
        border-width: 2px;
        border-style: solid;
        width: 80%;
    }
`

export const StyledLoginTitle = styled.div`
    display: flex;
    align-items: flex-end;
    margin-right: 15%;
    width: 100%;
    justify-content: center;
    flex-direction: column;

    white-space: pre-line;

    @media screen and (max-width: 1150px) {
        & {
            align-items: center;
            margin: 0;
        }
    }

`

export const StyledTitleText = styled.div<{passthrough?: string}>`
    text-align: right;
    font-weight: 700;
    font-size: 3.1rem;
    line-height: 81px;
    background-image: linear-gradient(to right, red, purple);
    background-clip: text;
    color: ${(props) => Boolean(props.passthrough) ? 'transparent' : props.theme.text};


    @media screen and (max-width: 1150px) {
        & {
            text-align: center;
        }
    }
`

export const StyledInputContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledInput = styled.input<{widthOverride?: string}>`
    /* background-color: pink; */
    border: none;
    width: ${(props) => props.widthOverride || "50%"};
    outline: none;
    border-radius: 30px;
    height: 3.2rem;
    line-height: 50px;
    padding: 0 1rem;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.secondary};
    font-weight: 500;
    margin-bottom: 2rem;

    &::placeholder {
        padding-left: 1rem;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
    }


`;

export const StyledInputBrand = styled.div`
    line-height: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.text}
`

