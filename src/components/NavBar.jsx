import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar, Typography } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const NavBar = () => {
    const { mode, toogleMode } = useContext(ThemeContext);
    return <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
            </Typography>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={toogleMode}
            >
                {
                    mode == 'light' ?  <DarkModeIcon /> : <LightModeIcon/>
                }
            </IconButton>
        </Toolbar>
    </AppBar>;
}

export default NavBar;