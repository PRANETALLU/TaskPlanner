import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return(
    <div className="Header">
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{alignItems: "center"}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                        Task Planner
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
    );
}

export default Header; 