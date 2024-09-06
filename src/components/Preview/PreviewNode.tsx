import { StyledEditIcon, StyledPreviewInfo, StyledPreviewNode, StyledPreviewNodeLeft, StyledPreviewNodeRight, StyledPreviewTitle, StyledValidateText } from "./Preview.styled"
import type { Data } from "../../contexts/data.context";



export default function PreviewNode({ keyName, value, handleOpen, handleClose }: { value: Data[keyof Data], keyName: keyof Data, handleOpen: any, handleClose: any }) {
    const colorCode = {
        pending: 'yellow',
        rejected: 'red',
        approved: 'green'
    }

    return (

        <StyledPreviewNode>
            <StyledPreviewNodeLeft>
                <StyledPreviewTitle>
                    {keyName}
                </StyledPreviewTitle>
                <StyledPreviewInfo
                    txtcolor={colorCode[value.state]}
                >
                    pending review
                </StyledPreviewInfo>
            </StyledPreviewNodeLeft>

            <StyledPreviewNodeRight>
                <StyledValidateText>
                    Validate
                </StyledValidateText>
                <StyledEditIcon
                    onClick={() => handleOpen(keyName)}
                />
            </StyledPreviewNodeRight>
        </StyledPreviewNode>



    )
}