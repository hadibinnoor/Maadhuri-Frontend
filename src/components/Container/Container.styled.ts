import styled from "styled-components";


export const StyledContainer = styled.div`
    min-width: 100vw;
    min-height: 100vh;

    max-width: 100vw;
    max-height: 100vh;

    height: 100%;
    width: 100%;

    position: relative;

    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1150px) {
        & {
            max-height: none;
        }
    }
`