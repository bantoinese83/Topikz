import React from 'react';
import { Box, Typography, Container } from "@mui/material";
import './styles/Footer.css';

const Footer = () => (
    <Box
        component="footer"
        className="footer-container"
    >
        <Container maxWidth="sm">
            <Typography variant="body1" className="footer-text" style={{ fontFamily: 'Bebas Neue' }}>
                ToPikz {new Date().getFullYear()}
            </Typography>
        </Container>
    </Box>
);

export default Footer;