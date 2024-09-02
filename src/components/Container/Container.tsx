import { StyledContainer } from "./Container.styled";

export default function Container({ children }: any) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}