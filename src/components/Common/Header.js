import React from 'react';
import { AppBar, Toolbar, Typography, useTheme, Badge, Avatar, Box } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Navigation from './Navigation';
import Search from '../ChatRoom/Search';
import './styles/Header.css';
import SphereLogo from "./SphereLogo";

const Header = () => {
    const theme = useTheme();
    return (
        <AppBar position="static" style={{
            padding: theme.spacing(2),
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '2px solid #ffffff',
            position: 'relative', // Add this line
            zIndex: 1, // Add this line
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
            backgroundColor: 'rgb(0,0,0)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            backgroundImage: 'url(/background-image.png)'

        }}>
            <Toolbar className="header-toolbar" style={{ justifyContent: 'space-between' }}>
                <Box display="flex">
                    <Box mr={2} className="header-logo">
                        <SphereLogo />
                    </Box>
                    <Navigation />
                </Box>
                <Search />
                <Typography
                    variant="h3"
                    className="header-title"
                    style={{
                        fontWeight: 'bold',
                        fontFamily: 'Bebas Neue',
                        fontSize: '4rem',
                        WebkitTextFillColor: 'transparent',
                        WebkitTextStrokeWidth: '1px',
                        WebkitTextStrokeColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        WebkitBackgroundClip: 'text',
                        textAlign: 'center'
                    }}
                >
                    ToPikz
                </Typography>
                <Box display="flex">
                    <Box ml={2} className="header-notifications">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </Box>
                    <Box ml={2} className="header-avatar">
                        <Avatar alt="User Avatar" src="/path/to/user/avatar.jpg" />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;