import styled from "styled-components"

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

