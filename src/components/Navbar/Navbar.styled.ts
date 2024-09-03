import styled from "styled-components";


export const StyledNavContainer = styled.div`
    width: 100%;
    max-height: 300px;
    height: 10rem;
    background-color: ${({ theme }) => theme.primary};
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

`

export const StyledNavBrand = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: yellow; */
    display: flex;
    align-items: center;
    margin-left: 10%;
`

export const StyledNavLeft = styled.div`
    display: flex;
    height: 100%;
    flex: 1;
`


const ImageBlueprint = styled.img`
    object-fit: cover;
    height: 50px;
    width: auto;
    color: ${({ theme }) => theme.text};
`

export const StyledNavRight = styled.div`
    display: flex;
    height: 100%;
    flex: 1;
`

export const StyledBrandImage = styled(ImageBlueprint)`
    height: 30px;
`

export const StyledBrandName = styled(ImageBlueprint)`
    height: 30px;
    margin-left: 1rem;
`

export const StyledDUKLogo = styled(ImageBlueprint)`
    height: 50px;
    margin-right: 15%;
`

export const StyledNavBrandRight = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: yellow; */
    display: flex;
    align-items: center;
    justify-content: flex-end;

`

export const StyledDivider = styled.div`
    border-left:1px solid rgba(255, 255, 255, 0.52); 
    border-right:1px solid rgba(255, 255, 255, 0.52); 
    height: 50px;
    margin: 0 1.3rem;


`

export const StyledNavBrandNameRight = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: yellow; */
    display: flex;
    align-items: flex-end;
    justify-content: center;
    text-align: right;
    flex-direction: column;

`

export const StyledNavBrandNameTitle = styled.div`
    text-align: right;
    color: white;
    font-size: 0.8rem;
`

export const StyledAdmin = styled.div`
    border-style: solid;
    border-color: ${({ theme }) => theme.accent1};
    border-radius: 50%;
    border-width: 3px;
    height: 100%;
    width: 100%;
    min-width: 40px;
    min-height:40px;
    max-width: 30px;
    max-height: 30px;
    margin: 0 2rem;
`