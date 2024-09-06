import React, { useContext, useState } from "react";
import { DataContext } from "../../contexts/data.context";
import type { Data } from "../../contexts/data.context";
import { StyledCard, StyledEditIcon, StyledLLMOutput, StyledPreviewContainer, StyledPreviewInfo, StyledPreviewNode, StyledPreviewNodeLeft, StyledPreviewNodeRight, StyledPreviewTitle, StyledValidateText } from "./Preview.styled";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import DialogTitle from '@mui/material/DialogTitle';
import styled, { ThemeContext } from "styled-components";
import { Box, Switch } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { StyledButton } from "../Button/Button.styled";

const StyledSwitch = styled(Switch)`
    ::before {
        content: "HELLO WORLD"
    }

    ::after {
        content: "HLE NA"
    }

`

function PreviewNode({ keyName, value, handleOpen, handleClose }: { value: Data[keyof Data], keyName: keyof Data, handleOpen: any, handleClose: any }) {
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

export default function Preview() {
    const [open, setOpen] = useState<boolean>(false);
    const [node, selectedNode] = useState<string>('script1');
    const components = []
    const defaultState: any = {}
    const { data, setData } = useContext(DataContext);
    const themeContext: any = useContext(ThemeContext)
    const theme = useContext(themeContext)


    const handleOpen = (key: string) => {
        setOpen(true);
        selectedNode(key)
        console.log("opened", data[key])
    };

    const handleClose = () => {
        // setError(false);
        // setErrorText('')
        setOpen(false);
    };

    const onSubmit = () => {

    }

    for (const [key, v] of Object.entries(data)) {
        components.push(<PreviewNode handleOpen={handleOpen} handleClose={handleClose} keyName={key as any} value={v} />)
        defaultState[key] = false
    }


    return (
        <>
            <StyledPreviewContainer>
                {components.map(x => x)}
                <StyledPreviewNode
                    style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                        height: '10%',
                        justifyContent: 'flex-end'
                    }}
                >
                    <StyledButton
                        color={themeContext.accent2}
                        style={{
                            background: 'rgba(189, 0, 255, 0.3)'
                        }}
                    >
                        Generate Audio
                    </StyledButton>
                </StyledPreviewNode>
            </StyledPreviewContainer>

            <React.Fragment>

                <Dialog
                    open={open}
                    sx={{
                        backdropFilter: "blur(10px)",
                    }}

                    onClose={handleClose}
                    fullWidth={true}
                    maxWidth="lg"
                    PaperProps={{
                        component: 'form',
                        onSubmit: onSubmit,
                        style: {
                            backgroundColor: themeContext.tertiary,
                            color: themeContext.text,
                            height: '100%'
                        }
                    }}
                >
                    <Box
                        sx={{
                            overflowY: 'scroll',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <Box

                            sx={{
                                position: 'sticky',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                padding: '2rem 2rem',
                                fontSize: '2rem',
                                width: "100%",
                                maxHeight: '10%',
                                top: 0
                            }}
                        >
                            <IoClose
                                onClick={handleClose}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                width: "90%",
                                fontSize: '1.5rem'
                            }}
                        >LLM Output</Box>
                        <StyledLLMOutput>{data[node as any].text}</StyledLLMOutput>
                        {/* <StyledLLMOutput>{data[node as any].text}</StyledLLMOutput>

                        <StyledLLMOutput>{data[node as any].text}</StyledLLMOutput> */}


                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                padding: '2rem 4rem',
                                fontSize: '2rem',
                                width: "100%"
                            }}
                        >
                            <StyledButton
                                color={themeContext.accent2}
                            >
                                Generate Audio
                            </StyledButton>
                        </Box>

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Confirm</Button>
                        </DialogActions>

                        {/* <StyledSwitch /> */}

                    </Box>

                </Dialog>
            </React.Fragment>
        </>

    )

}
