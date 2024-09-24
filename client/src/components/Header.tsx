import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#121212' }}>
            <Toolbar>
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                    <Button color="inherit" href="/">דף הבית</Button>
                    <Button color="inherit" href="/contact">יצירת קשר</Button>
                    <Button color="inherit" href="#appointments">לקביעת תורים</Button>
                    <Button color="inherit" href="/articles">מאמרים</Button>
                    <Button color="inherit" href="#news">חדשות האתר</Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" component="div">
                        שלווה גמורה
                    </Typography>
                    <img
                        src="/images/shalvagmuralogo.png"
                        style={{ width: '40px', height: '40px', marginRight: '10px' }}
                    />

                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Header;