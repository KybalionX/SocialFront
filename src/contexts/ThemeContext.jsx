import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, createContext } from "react";

const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState("dark");

    const toogleMode = () => setMode(mode == 'light' ? 'dark' : 'light');

    const theme = createTheme({
        palette: {
            mode
        }
    });

    return <ThemeContext.Provider value={{
        mode,
        toogleMode
    }}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </ThemeContext.Provider>
}

export {
    ThemeContext,
    ThemeContextProvider
}