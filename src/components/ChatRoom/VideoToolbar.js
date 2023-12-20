import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import SubscribeIcon from '@mui/icons-material/Subscriptions';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Confetti from 'react-confetti';
import './styles/VideoToolbar.css';

const VideoToolbar = () => {

    // Use state hooks
    const [showConfetti, setShowConfetti] = useState(false);
    const [showEmoji, setShowEmoji] = useState('');

    const handleSubscribe = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 10000);
    }

    const handleThumbUp = () => {
        setShowEmoji('👍');
        setTimeout(() => setShowEmoji(''), 2000);
    }

    const handleThumbDown = () => {
        setShowEmoji('👎');
        setTimeout(() => setShowEmoji(''), 2000);
    }

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" className="video-toolbar">
            {showConfetti && <Confetti />}
            <IconButton className="toolbar-button" onClick={handleThumbUp}>
                <ThumbUpIcon />
                <Typography variant="body2" style={{ color: 'white' }}>Like</Typography>
            </IconButton>

            <IconButton className="toolbar-button" onClick={handleThumbDown}>
                <ThumbDownIcon />
                <Typography variant="body2" style={{ color: 'white' }}>Dislike</Typography>
            </IconButton>

            <IconButton className="toolbar-button">
                <ShareIcon />
                <Typography variant="body2" style={{ color: 'white' }}>Share</Typography>
            </IconButton>

            <IconButton className="toolbar-button" onClick={handleSubscribe}>
                <SubscribeIcon />
                <Typography variant="body2" style={{ color: 'white' }}>Subscribe</Typography>
            </IconButton>

            <IconButton className="toolbar-button">
                <CommentIcon />
                <Typography variant="body2" style={{ color: 'white' }}>Comment</Typography>
            </IconButton>

            <IconButton className="toolbar-button">
                <BookmarkBorderIcon />
                <Typography variant="body2" style={{ color: 'white' }}>Save</Typography>
            </IconButton>

            <Typography variant="body2" style={{ color: 'white' }} className="view-count">123K views</Typography>

            <Typography variant="h1" className="emoji-pop">{showEmoji}</Typography> {/* Display Emoji */}
        </Box>
    );
};

export default VideoToolbar;
