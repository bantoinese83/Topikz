import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const TopikzXXX = () => {
    return (
        <Card sx={{
            backgroundColor: '#424242',
            color: 'white',
            mb: 2,
            border: '2px solid white'  // Added white border
        }}>
            <CardContent>
                <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
                    TopikzXXX - Coming Soon
                </Typography>
                <Typography variant="body1" style={{ color: 'white' }}>
                    Stay tuned for our new exciting feature!
                </Typography>
                <Box mt={2}>
                    <Button variant="contained" color="error">
                        Subscribe Now
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TopikzXXX;
