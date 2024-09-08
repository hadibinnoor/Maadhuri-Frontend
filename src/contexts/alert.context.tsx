import React, { createContext } from 'react';
import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Alert, { AlertProps } from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from 'styled-components';


const AlertContext = createContext<{ setAlert: (state: boolean) => any, setAlertText: React.Dispatch<React.SetStateAction<string>>, severity: AlertProps['severity'], setSeverity: React.Dispatch<React.SetStateAction<AlertProps['severity']>> }>(null as any);


const AlertProvider = ({ children }: any) => {
    const themeContext = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const [alertText, setAlertText] = useState("");
    const [severity, setSeverity] = useState<AlertProps['severity']>('success')

    const setAlert = (state: boolean) => {
        setOpen(state);

    }


    return (
        <AlertContext.Provider value={{ setAlert, setAlertText, severity, setSeverity }}>
            <Box id="alertbox" sx={{ position: 'fixed', width: '50%', top: '20px', left: '50%', transform: 'translate(-50%, 0)', zIndex: '99' }}>
                <Collapse in={open}>
                    <Alert
                        severity={severity}
                        variant="filled"
                        style={{
                            // backgroundColor: themeContext?.tertiary,
                            color: themeContext?.text
                        }}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        {alertText}
                    </Alert>
                </Collapse>
            </Box>
            {children}

        </AlertContext.Provider>
    )
}

export default AlertProvider;
export { AlertContext };