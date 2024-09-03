import styled from "styled-components"

export const StyledValidateContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.primary};
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

