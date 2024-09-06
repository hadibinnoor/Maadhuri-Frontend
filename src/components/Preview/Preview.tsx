import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../../contexts/data.context";
import { StyledLLMOutput, StyledPreviewContainer, StyledPreviewNode } from "./Preview.styled";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import DialogTitle from '@mui/material/DialogTitle';
import styled, { ThemeContext } from "styled-components";
import { Box, CircularProgress, Switch } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { StyledButton } from "../Button/Button.styled";
import PreviewNode from "./PreviewNode";
import AudioCard from "./AudioCard";

const StyledSwitch = styled(Switch)`
    ::before {
        content: "HELLO WORLD"
    }

    ::after {
        content: "HLE NA"
    }

`




export default function Preview() {
    const [open, setOpen] = useState<boolean>(false);
    const [node, selectedNode] = useState<string>('script1');
    const components = []
    const defaultState: any = {}
    const { data, setData } = useContext(DataContext);
    const themeContext: any = useContext(ThemeContext);
    const theme = useContext(themeContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [doneLoading, setDoneLoading] = useState<boolean>(false);

    const audioBoxRef = useRef<HTMLDivElement>(null);


    const handleOpen = (key: string) => {
        setOpen(true);
        selectedNode(key)
        // console.log("opened", data[key])
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = () => {

    }

    const handleAudioGenerate = (ev: any) => {
        ev.preventDefault()
        setLoading(true);
        setDoneLoading(false);

        if (audioBoxRef.current)
            audioBoxRef.current.scrollIntoView({ behavior: 'smooth' })

        console.log("click")


    }


    let i = 0;
    for (const [key, v] of Object.entries(data)) {
        components.push(<PreviewNode key={i} handleOpen={handleOpen} handleClose={handleClose} keyName={key as any} value={v} />)
        defaultState[key] = false
        i++;
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
                        variant="contained"
                        sx={{
                            backgroundColor: themeContext.accent2
                        }}
                    // style={{
                    //     background: 'rgba(189, 0, 255, 0.3)'
                    // }}
                    >
                        Generate Radio Content
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
                            minHeight: '100%',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <Box

                            sx={{
                                position: 'fixed',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                padding: '2rem 2rem',
                                fontSize: '2rem',
                                width: "100%",
                                maxHeight: '10%',
                                top: 0,
                                right: 0
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
                                fontSize: '1.5rem',
                                marginTop: '2rem'
                            }}
                        >LLM Output</Box>
                        <StyledLLMOutput defaultValue={data[node as any].text} />
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
                                disabled={loading}
                                // color={themeContext.accent2}
                                variant="contained"
                                onClick={handleAudioGenerate}
                                sx={{
                                    backgroundColor: themeContext.accent2
                                }}
                            >
                                Generate Audio
                            </StyledButton>
                        </Box>

                        <Box
                            ref={audioBoxRef}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: "90%",
                                fontSize: '1.5rem',
                                minHeight: '50vh'
                            }}
                        >
                            {!doneLoading ? <>
                                <AudioCard />
                                

                            </> : (
                                !loading ? <></> :
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', 'justifyContent': 'center', width: "100%" }}>
                                        <CircularProgress size={"5rem"} sx={{ color: themeContext.accent2 }} />
                                        <DialogTitle sx={{ marginTop: '4rem' }}>Loading Audio</DialogTitle>
                                    </Box>
                            )}
                        </Box>

                        {/* {doneLoading ? <>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    width: "90%",
                                    fontSize: '1.5rem',
                                    // height: '50vh'
                                }}
                            >
                                AI Generated Audio
                            </Box>
                        </> : (!loading ? <></> : <Box sx={{ marginTop: '5rem', minHeight: '50%'}}><CircularProgress size={"5rem"} sx={{ color: themeContext.accent2 }} /></Box>)} */}

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
