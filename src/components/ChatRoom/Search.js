import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchQuery);
        // Add your search logic here
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            alignItems="center"
            sx={{
                borderRadius: '4px',
                backgroundColor: '#f0f0f0',
                padding: '10px',
                width: '80%',
                maxWidth: '600px',
                margin: '10px auto'
            }}
        >
            <TextField
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
                fullWidth
                sx={{
                    flexGrow: 1,
                    marginRight: '10px'
                }}
            />
            <Button
                type="submit"
                sx={{
                    marginLeft: '10px',
                    backgroundColor: '#161618',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'rgba(215,13,13,0.85)'
                    }
                }}
            >
                <SearchIcon />
            </Button>
        </Box>
    );
};

export default Search;