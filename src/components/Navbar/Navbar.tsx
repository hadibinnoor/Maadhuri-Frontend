import { StyledAdmin, StyledBrandImage, StyledBrandName, StyledDivider, StyledDUKLogo, StyledNavBrand, StyledNavBrandNameRight, StyledNavBrandNameTitle, StyledNavBrandRight, StyledNavContainer, StyledNavLeft, StyledNavRight } from "./Navbar.styled";
import logo from '../../assets/logo.svg'
import logoname from '../../assets/logoname.svg'
import duklogo from '../../assets/duklogo.svg'



export default function Navbar({ type }: { type: 'home' | 'dash' }) {


    return (
        <StyledNavContainer>
            <StyledNavLeft>
                <StyledNavBrand>
                    <StyledBrandImage
                        src={logo}
                    />
                    <StyledBrandName
                        src={logoname}
                    />
                </StyledNavBrand>
            </StyledNavLeft>
            <StyledNavRight>

                {type == 'home' ? (
                    <>
                        <StyledNavBrandRight>
                            <StyledNavBrandNameRight>
                                <StyledNavBrandNameTitle
                                    style={{ fontWeight: 400, color: "rgba(255, 255, 255, 0.8)" }}
                                >powered by</StyledNavBrandNameTitle>
                                <StyledNavBrandNameTitle
                                    style={{ fontWeight: 700 }}
                                >IIC DUK</StyledNavBrandNameTitle>
                            </StyledNavBrandNameRight>
                            <StyledDivider />
                            <StyledDUKLogo
                                src={duklogo}
                            />
                        </StyledNavBrandRight>
                    </>

                ) : (<>
                    <StyledNavBrandRight>
                        <StyledNavBrandNameRight>
                            <StyledNavBrandNameTitle
                                style={{ fontWeight: 300, color: "rgba(255, 255, 255, 0.8)", fontSize: "0.8rem" }}
                            >Good Morning</StyledNavBrandNameTitle>
                            <StyledNavBrandNameTitle
                                style={{ fontWeight: 700, fontSize: '1.2rem' }}
                            >Admin</StyledNavBrandNameTitle>
                        </StyledNavBrandNameRight>

                        <StyledAdmin />
                    </StyledNavBrandRight>

                </>)}

            </StyledNavRight>
        </StyledNavContainer>
    )
}