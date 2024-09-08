import { useContext, useEffect, useState } from "react";
import { StyledContainer } from "../../components/Container/Container.styled";
import Navbar from "../../components/Navbar/Navbar";
import { LLMOutputPlaceholder, LLMOutputPlaceholderText, LLMValidateBtn, StyledGenerateBtnContainer, StyledLLMOutputContainer, StyledLLMScoreContainer, StyledParametersContainer, StyledParametersHeading, StyledParametersHeadingText, StyledParametersInfo, StyledTextArea, StyledValidateContainer, StyledValidateLeft, StyledValidateLeftParameters, StyledValidateLeftToggle, StyledValidateRight, ToggleBtn, ValidateBtnContainer } from "./Validate.styled";
import Preview from "../../components/Preview/Preview";
import getScripts from "../../api/getScripts";
import { MdMessage } from "react-icons/md";

import { StyledCircularProgress } from "../../components/Preview/Preview.styled";
import { DataContext } from "../../contexts/data.context";
import HorizontalDivider from "../../components/Divider/HorizontalDivider";
import Background from "../../components/Background/Background";
import { StyledButton } from "../../components/Button/Button.styled";
import { ThemeContext } from "styled-components";
import { IoIosInformationCircleOutline } from "react-icons/io";


export default function Validate() {
    const theme: any = useContext(ThemeContext);

    const parameters = ['Twitter', 'Reddit', 'Youtube']
    const [selectedParameter, setSelectedParameter] = useState<Boolean[]>(new Array(parameters.length).fill(false));
    const [doneLoadingData, setDoneLoadingData] = useState<boolean>(false);
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const { data, setData } = useContext(DataContext);

    const handleParameterClick = (btn: string, i: number) => {
        selectedParameter[i] = !selectedParameter[i]

        console.log(selectedParameter)
        setSelectedParameter([...selectedParameter])
    }

    const handleGenerateClick = () => {
        setLoadingData(true)
        getScripts().then((dat) => {
            setData(dat as any)
            setDoneLoadingData(true)
            setLoadingData(false)
        })
    }

    useEffect(() => {
        console.log(selectedParameter)
    }, [selectedParameter])


    return (
        <StyledContainer>
            <Background />
            <Navbar type="dash" />
            <StyledValidateContainer>
                <StyledValidateLeft>

                    <StyledParametersContainer>

                        <StyledValidateLeftParameters>
                            <StyledParametersHeading style={{ marginBottom: "1rem" }}>
                                <StyledParametersHeadingText
                                    style={{ fontSize: '1.5rem' }}
                                >Content</StyledParametersHeadingText>
                                <StyledParametersHeadingText
                                    // color='accent'
                                    style={{ fontSize: "1.8rem", fontWeight: 700 }}
                                >Parameters</StyledParametersHeadingText>



                            </StyledParametersHeading>
                            <HorizontalDivider style={{ display: 'flex', marginBottom: '2rem' }} />

                            {
                                parameters.map((x, i) => {
                                    return (
                                        <StyledParametersHeading>
                                            <StyledButton
                                                variant="contained"
                                                key={i}
                                                onClick={() => handleParameterClick(x, i)}
                                                sx={{
                                                    backgroundColor: selectedParameter[i] ? theme.accent1 : 'rgb(133, 133, 133)',
                                                    width: '50%'
                                                }}
                                            >{parameters[i]}</StyledButton>
                                        </StyledParametersHeading>
                                    )
                                })
                            }

                            <StyledParametersHeading style={{ marginTop: "2rem", marginBottom: '1.5rem' }}>
                                <StyledParametersHeadingText
                                    style={{ fontSize: "1.5rem" }}
                                >Additional Prompts</StyledParametersHeadingText>



                            </StyledParametersHeading>
                            <HorizontalDivider style={{ display: 'flex' }} />
                            <StyledParametersHeading>
                                <StyledTextArea placeholder="Enter your custom prompt here" />
                            </StyledParametersHeading>



                        </StyledValidateLeftParameters>

                        <StyledGenerateBtnContainer>
                            <StyledButton
                                onClick={handleGenerateClick}
                                sx={{
                                    backgroundColor: theme.accent2,
                                    color: theme.text
                                }}
                            >
                                Generate
                            </StyledButton>
                        </StyledGenerateBtnContainer>
                    </StyledParametersContainer>


                </StyledValidateLeft>

                <StyledValidateRight>
                    <StyledLLMOutputContainer>
                        {doneLoadingData ? <Preview /> : (!loadingData ?
                            <LLMOutputPlaceholder>
                                <LLMOutputPlaceholderText style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: 100 }}>
                                    <IoIosInformationCircleOutline />
                                </LLMOutputPlaceholderText>
                                <LLMOutputPlaceholderText
                                    style={{ fontWeight: 300, fontSize: "1.2rem", width: "100%" }}
                                >
                                    {/* <IoIosInformationCircleOutline fontSize={"2.5rem"} style={{
                                        marginRight: '0.5rem',
                                        fontWeight: 500
                                    }} /> */}
                                    Use the parameters to generate radio content
                                </LLMOutputPlaceholderText>
                            </LLMOutputPlaceholder>
                            : <StyledCircularProgress style={{ color: theme.accent2 }} size="5rem" />)}
                    </StyledLLMOutputContainer>

                </StyledValidateRight>
            </StyledValidateContainer>
        </StyledContainer>
    )
}