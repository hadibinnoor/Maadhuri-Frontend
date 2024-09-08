import { StyledEditIcon, StyledPreviewInfo, StyledPreviewNode, StyledPreviewNodeLeft, StyledPreviewNodeRight, StyledPreviewTitle, StyledValidateText } from "./Preview.styled"
import { DataContext, type Data } from "../../contexts/data.context";
import { useContext } from "react";
import { Tooltip } from "@mui/material";



export default function PreviewNode({ keyName, value, handleOpen, handleClose }: { value: Data[keyof Data], keyName: keyof Data, handleOpen: any, handleClose: any }) {
    const colorCode = {
        pending: ['yellow', 'Pending Review'],
        rejected: ['red', 'Prompt Rejected'],
        approved: ['lightgreen', 'Prompt Approved']
    }



    // const data = useContext(DataContext);

    return (

        <StyledPreviewNode>
            <StyledPreviewNodeLeft>
                <StyledPreviewTitle>
                    {keyName}
                </StyledPreviewTitle>
                <StyledPreviewInfo
                    txtcolor={colorCode[value.state][0]}
                >
                    {colorCode[value.state][1]}
                </StyledPreviewInfo>
            </StyledPreviewNodeLeft>

            <Tooltip title="Click to edit and manage prompts" placement="top-end">
                <StyledPreviewNodeRight onClick={() => handleOpen(keyName)}>
                    <StyledValidateText>
                        Validate
                    </StyledValidateText>
                    <StyledEditIcon

                    />
                </StyledPreviewNodeRight>
            </Tooltip>
        </StyledPreviewNode>



    )
}