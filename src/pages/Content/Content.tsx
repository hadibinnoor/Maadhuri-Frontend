import React, { useContext, useEffect, useRef, useState } from "react";
import Background from "../../components/Background/Background"
import { StyledContainer } from "../../components/Container/Container.styled"
import Navbar from "../../components/Navbar/Navbar"
import { AudioMetaData, SequenceContent, SequenceHeader, SequenceSeperator, StyledAddSequence, StyledButtonContainer, StyledContentContainer, StyledSequence, StyledSequenceContainer, StyledSequenceNode } from "./Content.styled"
import { IoMdAdd } from "react-icons/io";
import { Button, styled, Dialog, Box, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { StyledButton } from "../../components/Button/Button.styled";
import { ThemeContext } from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AlertContext } from "../../contexts/alert.context";
import Switch from '@mui/material/Switch';


interface AudioFile {
    id: number;
    file: File | null;
    url: string | null;
    background: boolean
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function Content() {

    const baseurl = "https://ab28-14-139-189-168.ngrok-free.app"
    const alertContext = useContext(AlertContext);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
    const [open, setOpen] = useState(false);
    const themeContext = useContext(ThemeContext);
    const [selectedAudio, setSelectedAudio] = useState<number>(0);
    const [uploading, setUploading] = useState(false);
    const [id, setId] = useState<number>(1);
    const [audioURL, setAudioURL] = useState<string | null>(null)



    // Function to handle file uploads and generate a URL for audio preview
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const file = e.target.files ? e.target.files[0] : null;
        const url = file ? URL.createObjectURL(file) : null;

        setAudioFiles((prevFiles) =>
            prevFiles.map((audioFile) =>
                audioFile.id === id ? { ...audioFile, file, url } : audioFile
            )
        );
    };


    const updateAudioNode = (id: number, newFile: AudioFile) => {
        setAudioFiles((prevFiles) =>
            prevFiles.map((audioFile) =>
                audioFile.id === id ? { ...newFile } : audioFile
            )
        );
    }

    // Add a new node to upload audio
    const addNewAudioNode = () => {
        setAudioFiles((prevFiles) => [
            ...prevFiles,
            { id: id, file: null, url: null, background: false }
        ]);

        setId((id + 1));

        setTimeout(() => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
            }
        }, 100);
    };

    const deleteAudioNode = (id: number) => {
        setAudioFiles((prevFiles) => prevFiles.filter(x => x.id !== id));
    }

    const handleDialog = (val: boolean, index?: number) => {
        setOpen(val)

        if (index != null && index != undefined) {
            setSelectedAudio(index)
            console.log(index, audioFiles[index])
        }
    }

    const formatBytes = (bytes: number, decimals = 2) => {
        if (!+bytes) return '0 Bytes'

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']

        const i = Math.floor(Math.log(bytes) / Math.log(k))

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }

    const handleSubmit = async () => {

        if (audioFiles.length === 0 || audioFiles.filter(x => x.url === null).length > 0) {
            alertContext.setSeverity('warning')
            alertContext.setAlertText('Please upload audio sequences to nodes before submitting!')
            alertContext.setAlert(true)
            return;
        }

        alertContext.setSeverity('info')
        alertContext.setAlertText('Uploading Audio Sequences')
        alertContext.setAlert(true)
        setUploading(true);
        const formData = new FormData();



        for (let i = 0; i < audioFiles.length; i++) {
            let audioFile = audioFiles[i];
            if (audioFile.file) {

                formData.append('audio_files', audioFile.file);
                formData.append('order', String(i + 1));
                formData.append('bg_needed', String(audioFile.background))
            }
        }



        try {
            const response = await fetch(`${baseurl}/upload-audio/`, {
                method: "POST",
                body: formData
            });

            setUploading(false);

            if (response.ok) {
                let data = await response.json()
                alertContext.setSeverity('success')
                alertContext.setAlertText('Successfully uploaded audio sequences!')
                alertContext.setAlert(true)

                setAudioURL(data.processed_audio_url)
            } else {
                console.log("Failed to upload files.");
            }
        } catch (error) {
            console.error("Error uploading files:", error);
            console.log("Error occurred while uploading files.");
            alertContext.setSeverity('error')
            alertContext.setAlertText('Error uploading files')
            alertContext.setAlert(true)
            console.log("Files and metadata uploaded successfully!");
            setUploading(false);

        }
    };

    const redirectToAudio = () => {
        if (audioURL != null)
            window.open(`${baseurl}/${audioURL}`, '_blank', 'noopener,noreferrer');
    }

    const toggleBackground = (id: number) => {
        const audioFile = audioFiles.find(x => x.id == id);

        if (!audioFile) return console.error('unknown audiofile');

        audioFile.background = !audioFile.background;

        updateAudioNode(id, audioFile);
    }


    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        const handleScroll = (e: WheelEvent) => {
            if (scrollContainer) {
                e.preventDefault(); // Prevent default vertical scroll
                scrollContainer.scrollLeft += e.deltaY; // Scroll horizontally
            }
        };

        if (scrollContainer) {
            scrollContainer.addEventListener("wheel", handleScroll);
        }

        // Cleanup event listener on unmount
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("wheel", handleScroll);
            }
        };
    }, []);

    return (
        <>
            <StyledContainer>
                <Background />
                <Navbar type="dash" />

                <StyledContentContainer>



                    <StyledSequenceContainer>
                        <StyledSequence ref={scrollContainerRef}>

                            {audioFiles.map((audioFile, index) => (
                                <>
                                    <StyledSequenceNode>
                                        <SequenceHeader>{`Sequence ${index + 1}`}</SequenceHeader>
                                        <SequenceContent>
                                            <Button
                                                component="label"
                                                role={undefined}
                                                variant="contained"
                                                tabIndex={-1}
                                                startIcon={<CloudUploadIcon />}
                                            >
                                                {audioFile.url ? 'Upload New Audio' : 'Upload Audio'}

                                                <VisuallyHiddenInput
                                                    type="file"
                                                    accept="audio/*"
                                                    onChange={(e) => handleFileUpload(e, audioFile.id)}

                                                />
                                            </Button>
                                            <StyledButton
                                                color="error"
                                                variant="contained"
                                                sx={{ marginTop: '2rem' }}
                                                onClick={() => deleteAudioNode(audioFile.id)}
                                            >Delete</StyledButton>
                                            {audioFile.url ? (
                                                <AudioMetaData>
                                                    <StyledButton
                                                        variant="outlined"
                                                        sx={{ color: 'lightgreen' }}
                                                        onClick={() => handleDialog(true, index)}
                                                    >
                                                        Preview Audio
                                                    </StyledButton>
                                                </AudioMetaData>
                                            ) : (
                                                <AudioMetaData style={{ color: 'yellow' }}>
                                                    Select an audio file
                                                </AudioMetaData>
                                            )}
                                            {audioFile.url && (
                                                <Box
                                                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', 'alignItems': 'center', color: themeContext?.text, marginTop: '1rem', fontSize: '1rem'}}
                                                >
                                                    <Typography>Background</Typography>
                                                    <Switch
                                                        checked={audioFile.background}
                                                        onChange={() => toggleBackground(audioFile.id)}
                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                    />
                                                </Box>
                                            )}
                                        </SequenceContent>
                                    </StyledSequenceNode>

                                    {index != (audioFiles.length - 1) &&
                                        <SequenceSeperator>
                                            <FaLongArrowAltRight />
                                        </SequenceSeperator>
                                    }
                                </>
                            ))}



                        </StyledSequence>
                        <StyledAddSequence>
                            <IoMdAdd onClick={addNewAudioNode} />
                            {/* <StyledButton
                                variant="contained"
                                startIcon={<IoMdAdd />}
                                onClick={addNewAudioNode}
                            >Add Sequence</StyledButton> */}
                        </StyledAddSequence>
                    </StyledSequenceContainer>

                    <StyledButtonContainer>

                        {audioURL && (
                            <StyledButton
                                variant="contained"
                                onClick={redirectToAudio}
                                sx={{
                                    backgroundColor: themeContext?.accent2
                                }}
                            >
                                Final Audio
                            </StyledButton>
                        )}
                        <StyledButton
                            disabled={uploading}
                            variant="contained"
                            onClick={handleSubmit}
                            sx={{
                                backgroundColor: themeContext?.accent2,
                                marginLeft: "1rem"
                            }}
                        >Generate Audio</StyledButton>

                    </StyledButtonContainer>
                </StyledContentContainer>
            </StyledContainer >

            <React.Fragment>

                <Dialog
                    maxWidth={"md"}
                    open={open}
                    onClose={() => handleDialog(false)}
                    PaperProps={{
                        style: {
                            backgroundColor: themeContext?.tertiary,
                            color: themeContext?.text,
                        }
                    }}
                >
                    {(audioFiles[selectedAudio] && audioFiles[selectedAudio].file) && (
                        <>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifContet: 'center',
                                    // alignItems: 'center'
                                }}
                            >
                                <DialogTitle>Audio MetaData</DialogTitle>
                                <DialogContent>
                                    <DialogContentText color={themeContext?.text}>
                                        {`Sequence ID: ${audioFiles[selectedAudio].id}`}
                                    </DialogContentText>
                                    <DialogContentText color={themeContext?.text}>
                                        {`File Name: ${audioFiles[selectedAudio].file?.name}`}
                                    </DialogContentText>
                                    <DialogContentText color={themeContext?.text}>
                                        {`File Size: ${formatBytes((audioFiles[selectedAudio].file as File).size)}`}
                                    </DialogContentText>
                                    <DialogContentText color={themeContext?.text}>
                                        {`Last Modified: ${new Date((audioFiles[selectedAudio].file as File).lastModified).toDateString()}`}
                                    </DialogContentText>
                                    <DialogContentText color={themeContext?.text}>
                                        {`Background: ${audioFiles[selectedAudio].background ? 'Enabled' : 'Disabled'}`}
                                    </DialogContentText>
                                </DialogContent>
                                <DialogTitle>Audio Preview</DialogTitle>
                                <DialogContent>
                                    <audio controls>
                                        <source src={(audioFiles[selectedAudio].url as string)} type={audioFiles[selectedAudio].file?.type} />
                                        Your browser does not support the audio element.
                                    </audio>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={() => handleDialog(false)}>Close</Button>
                                </DialogActions>
                            </Box>

                        </>
                    )}

                </Dialog>
            </React.Fragment>

        </>

    )
}