// import { useContext } from "react";
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";
import { ErrorOverlay, StyledInput, StyledInputBrand, StyledInputContainer, StyledLoginContainer, StyledLoginLeft, StyledLoginRight, StyledLoginTitle, StyledSignInBtn, StyledTitleText } from "./Login.styled";
// import { FireBaseContext } from "../../contexts/firebase.context";
import AccountManager from "../../structures/AccountManager";
import { useContext, useEffect, useState } from "react";
import { FireBaseContext } from "../../contexts/firebase.context";
import { useNavigate } from "react-router-dom";
import HorizontalDivider from "../../components/Divider/HorizontalDivider";
import Background from "../../components/Background/Background";

export default function Login() {

    const navigate = useNavigate();
    const authContext = useContext(FireBaseContext);
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(ev: any) {
        ev.preventDefault();
        let email = ev.target.email.value,
            password = ev.target.password.value;
        let user;


        user = await AccountManager.signIn(email, password);


        if (user.error) return setError(user.detail.split("/")[1].split("-").join(" "));





    }

    useEffect(() => {
        if (authContext.user)
            navigate('/validate')
    }, [authContext.user])

    // const authContext = useContext(FireBaseContext);

    return (
        <Container>
            <Background />
            <Navbar type="home" />
            <StyledLoginContainer>
                <StyledLoginLeft>
                    <StyledInputContainer
                        autoComplete="one-time-code"
                        onSubmit={onSubmit}
                    >
                        {error && (<ErrorOverlay>{error}</ErrorOverlay>)}
                        <StyledInput
                            type="email"
                            autoComplete="one-time-code"

                            placeholder="Email"
                            name="email"
                        />
                        <StyledInput
                            type="password"
                            autoComplete="one-time-code"

                            placeholder="Password"
                            name="password"
                        />
                        <StyledSignInBtn
                            widthOverride={"20%"}
                            type="submit"
                            value={"Sign In"}
                        />

                        <StyledInputBrand>{`Born in thingQbator`}</StyledInputBrand>

                    </StyledInputContainer>
                </StyledLoginLeft>

                <HorizontalDivider />
                <StyledLoginRight>
                    <StyledLoginTitle>
                        <StyledTitleText>
                            {`India's First
                        Generative AI`}
                        </StyledTitleText>
                        <StyledTitleText style={{ fontSize: '4rem' }} passthrough={"true"}>
                            {`Campus Radio`}
                        </StyledTitleText>
                    </StyledLoginTitle>
                </StyledLoginRight>
            </StyledLoginContainer>
        </Container>
    )
}