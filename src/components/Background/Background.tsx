import { StyledBackdrop, StyledLoginBackground } from "./Background.styled"
import bg from '../../assets/Ellipse 11.png'

export default function Background() {
    return (
        <StyledBackdrop>
            <StyledLoginBackground
                src={bg}
            />
        </StyledBackdrop>
    )
}