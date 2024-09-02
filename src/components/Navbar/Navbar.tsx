import { StyledBrandImage, StyledBrandName, StyledDivider, StyledDUKLogo, StyledNavBrand, StyledNavBrandNameRight, StyledNavBrandNameTitle, StyledNavBrandRight, StyledNavContainer, StyledNavLeft, StyledNavRight } from "./Navbar.styled";
import logo from '../../assets/logo.svg'
import logoname from '../../assets/logoname.svg'
import duklogo from '../../assets/duklogo.svg'



export default function Navbar() {


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
            </StyledNavRight>
        </StyledNavContainer>
    )
}