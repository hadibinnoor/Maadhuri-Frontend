import { useContext } from "react";
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";
import { StyledHorizontalDivider, StyledInput, StyledInputBrand, StyledInputContainer, StyledLoginContainer, StyledLoginLeft, StyledLoginRight, StyledLoginTitle, StyledTitleText } from "./Login.styled";
import { FireBaseContext } from "../../contexts/firebase.context";

export default function Login() {

    const authContext = useContext(FireBaseContext);

    return (
        <Container>
            <Navbar />
            <StyledLoginContainer>
                <StyledLoginLeft>
                    <StyledInputContainer>
                        <StyledInput
                            type="text"
                            placeholder="Username"
                        />
                        <StyledInput 
                            type="text"
                            placeholder="text"
                        />
                        <StyledInput 
                            widthOverride={"20%"}
                            type="submit"
                            style={{ fontSize: '1.4rem', fontWeight: 700, background: "rgba(58, 45, 206, 1)" }}
                            value={"Sign In"}
                        />

                        <StyledInputBrand>{`Born in thingQbator`}</StyledInputBrand>

                    </StyledInputContainer>
                </StyledLoginLeft>
                <StyledHorizontalDivider><div /></StyledHorizontalDivider>
                <StyledLoginRight>
                    <StyledLoginTitle>
                        <StyledTitleText>
                            {`India's First
                        Generative AI`}
                        </StyledTitleText>
                        <StyledTitleText passthrough={"true"}>
                            {`Campus Radio`}
                        </StyledTitleText>
                    </StyledLoginTitle>
                </StyledLoginRight>
            </StyledLoginContainer>
        </Container>
    )
}