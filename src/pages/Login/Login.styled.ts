import styled, { css } from "styled-components";



export const StyledLoginContainer = styled.div`
    height: calc(100vh - 10rem);
    width: 100%;
    display: flex;
    background: transparent;
    position: relative;

    display: flex;
    flex-direction: row;
    


    @media screen and (max-width: 1150px) {
        & {
            flex-direction: column-reverse;
            height: 200vh;
            background-color: ${({ theme }) => theme.primary};

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

export const StyledTitleText = styled.div<{ passthrough?: string }>`
    text-align: right;
    font-weight: 700;
    font-size: 3.1rem;
    line-height: 81px;
    background-image: linear-gradient(to right, red, purple);
    background-clip: text;
    color: ${(props) => Boolean(props.passthrough) ? 'transparent' : props.theme.text};

    
    ${( props ) => !Boolean(props.passthrough) && css`
        text-shadow: 1px 1px 2px pink;
    `}
    @media screen and (max-width: 1150px) {
        & {
            text-align: center;
        }
    }
`

export const StyledInputContainer = styled.form`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledInput = styled.input<{ widthOverride?: string }>`
    /* background-color: pink; */
    border: none;
    width: ${(props) => props.widthOverride || "50%"};
    outline: none;
    border-radius: 30px;
    height: 3.2rem;
    line-height: 50px;
    /* padding: 0 1rem; */
    padding-left: 1rem;;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.tertiary};
    font-weight: 500;
    margin-bottom: 2rem;
   


    &::placeholder {
        /* padding-left: 1rem; */
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
    }

    /* &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 50px ${({ theme }) => theme.primary} inset !important;
    }

    &:-webkit-autofill  {
        -webkit-text-fill-color: white !important;
    } */


`;

export const StyledSignInBtn = styled(StyledInput)`
    font-size: 1.4rem;
    font-weight: 600;
    background-color: transparent;
    background: linear-gradient(${({ theme }) => theme.primary}, ${({ theme }) => theme.primary}) padding-box,
        linear-gradient(to right, purple, darkblue, darkorchid) border-box;
    border-radius: 30px;
    border: 2px solid transparent;
`

export const StyledInputBrand = styled.div`
    line-height: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
`

export const ErrorOverlay = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-size: 1.2rem;
    margin: 1rem 0;
`;