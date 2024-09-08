import styled from "styled-components"

export const StyledBackdrop = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: black;
`
export const StyledLoginBackground = styled.img`
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;

    filter: blur(8px);

    @media screen and (max-width: 1150px) {
        & {
            width: 100vw;
            height: 100vh;
            display: none;
            
        }
    }
`

