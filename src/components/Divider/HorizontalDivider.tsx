import { StyledHorizontalDivider } from "./Divider.styled";

export default function HorizontalDivider({ style }: { style?: React.CSSProperties }) {
    return (
        <StyledHorizontalDivider style={style}><div /></StyledHorizontalDivider>
    )
}