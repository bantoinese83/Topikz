import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Comment = () => {
    const [comment, setComment] = useState('');
    const [open, setOpen] = useState(false);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const submitComment = () => {
        if (comment.trim() !== '') {
            console.log(comment); // Here, integrate with your backend or state management
            setComment(''); // Reset comment input after submission
            setOpen(true); // Show a success message
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Box component="form" noValidate autoComplete="off">
            <Typography variant="h6" gutterBottom>Leave a comment</Typography>
            <TextField
                label="Write a comment"
                value={comment}
                onChange={handleCommentChange}
                fullWidth
                multiline
                margin="normal"
                variant="outlined"
                rows={4}
                InputLabelProps={{
                    style: { color: 'white' },
                }}
                InputProps={{
                    style: { color: 'white' }, // This will set the input text color to white
                }}
            />

            <Button onClick={submitComment} variant="contained" color="primary">
                Post Comment
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
                    Comment posted successfully!
                </MuiAlert>
            </Snackbar>
        </Box>
    );
};

export default Comment;