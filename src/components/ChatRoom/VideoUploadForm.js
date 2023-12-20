import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { uploadVideo } from "../../firebase/storage";
import './styles/VideoUploadForm.css'; // Import the CSS file

const VideoUploadForm = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    const whiteInputStyle = {
        input: { color: 'white' },
        label: { color: 'white' },
        notchedOutline: { borderColor: 'white' }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (videoFile) {
            await uploadVideo(videoFile, title, description, tags); // Pass additional fields to uploadVideo
        }
    };

    return (
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} className="form-container">
            <Typography variant="h6" gutterBottom>Upload Video</Typography>
            <TextField
                label="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                fullWidth
                margin="normal"
                InputLabelProps={{ style: whiteInputStyle.label }}
                InputProps={{ style: whiteInputStyle.input }}
                variant="outlined"
            />
            <TextField
                label="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                fullWidth
                margin="normal"
                InputLabelProps={{ style: whiteInputStyle.label }}
                InputProps={{ style: whiteInputStyle.input }}
                variant="outlined"
            />
            <TextField
                label="Tags (comma separated)"
                value={tags}
                onChange={(event) => setTags(event.target.value)}
                fullWidth
                margin="normal"
                InputLabelProps={{ style: whiteInputStyle.label }}
                InputProps={{ style: whiteInputStyle.input }}
                variant="outlined"
            />
            <Button variant="contained" component="label" fullWidth>
                Select Video
                <input type="file" hidden onChange={(event) => setVideoFile(event.target.files[0])} accept="video/*" />
            </Button>
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 16 }}>
                Upload Video
            </Button>
        </Box>
    );
};

export default VideoUploadForm;
