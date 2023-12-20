import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ChatIcon from '@mui/icons-material/Chat';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HistoryIcon from '@mui/icons-material/History';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SecurityIcon from '@mui/icons-material/Security';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';

const NavigationItem = ({ text, icon, to }) => (
    <ListItem button component={Link} to={to} className="navigation-list-item">
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
    </ListItem>
);

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.target.closest('.MuiListItem-root')) {
            return;
        }

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const handleClick = () => {
        setOpenSubmenu(!openSubmenu);
    };

    const list = () => (
        <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="Account" />
                    {openSubmenu ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {[
                            { text: 'Profile', icon: <AccountCircleIcon />, to: '/profile' },
                            { text: 'Settings', icon: <SettingsIcon />, to: '/settings' },
                            { text: 'My Videos', icon: <VideoLibraryIcon />, to: '/my-videos' },
                            { text: 'Favorites', icon: <BookmarkIcon />, to: '/favorites' },
                            { text: 'History', icon: <HistoryIcon />, to: '/history' },
                            { text: 'Subscriptions', icon: <SubscriptionsIcon />, to: '/subscriptions' },
                            { text: 'Security', icon: <SecurityIcon />, to: '/security' },
                            { text: 'Help & Support', icon: <HelpIcon />, to: '/help' },
                            { text: 'Feedback', icon: <FeedbackIcon />, to: '/feedback' },
                            { text: 'Logout', icon: <ExitToAppIcon />, to: '/logout' },
                        ].map((item, index) => (
                            <NavigationItem key={index} text={item.text} icon={item.icon} to={item.to} />
                        ))}
                    </List>
                </Collapse>
                <NavigationItem text="Chat" icon={<ChatIcon />} to="/chat" />
                <NavigationItem text="Upload" icon={<CloudUploadIcon />} to="/upload" />
            </List>
        </div>
    );

    return (
        <div>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}
                        className="navigation-icon-button">
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>
    );
};

export default Navigation;
