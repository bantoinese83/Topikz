import React from 'react';
import { Box, Typography } from '@mui/material';
import { Timestamp } from 'firebase/firestore';
import './styles/VideoPlayer.css';

const VideoPlayer = ({ videoUrl, description, timestamp }) => {
    // Function to format the timestamp
    const formatDate = (timestamp) => {
        // Check if timestamp is a Firebase Timestamp object
        if (timestamp instanceof Timestamp) {
            // Convert to JavaScript Date object and format
            return timestamp.toDate().toLocaleDateString("en-US", {
                year: 'numeric', month: 'long', day: 'numeric'
            });
        }
        // Return a default or placeholder text if timestamp is not available
        return 'Date not available';
    };

    return (
        <Box className="VideoPlayer-container">
            <video width="100%" controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Box p={2}>
                <Typography variant="subtitle1" className="VideoPlayer-description">{description}</Typography>
                <Typography variant="caption" className="VideoPlayer-timestamp">
                    {formatDate(timestamp)}
                </Typography>
            </Box>
        </Box>
    );
};

export default VideoPlayer;
