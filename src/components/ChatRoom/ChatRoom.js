import React, {useState} from 'react';
import {Grid, Typography, Box, Card, CardContent, CssBaseline} from "@mui/material";
import {styled} from '@mui/system';
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import EmojiPicker from './EmojiPicker';
import VideoPlayer from "./VideoPlayer";
import Comment from "./Comment";
import VideoToolbar from "./VideoToolbar";
import './styles/ChatRoom.css';
import RecentUploads from "./RecentUploads";
import MostViewed from "./MostViewed";
import MostLiked from "./MostLiked";
import TopikzXX from './TopikzXXX';
import Ads from "./Ads";


const ScrollableBox = styled(Box)({
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
    }
});

const cardStyle = {
    backgroundColor: '#424242',
    color: 'white',
    overflow: 'hidden',
    marginTop: '20px',
    border: '2px solid white', // Added white border
};

const ChatRoom = () => {
    const [selectedEmoji, setSelectedEmoji] = useState(null);

    return (
        <Grid container spacing={3} className="ChatRoom-container">
            <CssBaseline/>

            {/* Row for Video Player and Comments */}
            <Grid item xs={12} md={8}>
                {/* Video Player Section */}
                <Grid item xs={12}>
                    <Card style={cardStyle}> {/* Chat Room Section */}
                        <CardContent style={{backgroundColor: '#424242', color: 'white'}}>
                            <Typography variant="h5" gutterBottom style={{color: 'white'}}></Typography>
                            <VideoPlayer/>
                            <VideoToolbar/>
                            <Comment/>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Ads Section */}
                <Card style={cardStyle}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom style={{ color: 'white' }}></Typography>
                        <Ads adId="YOUR_AD_CLIENT_ID" adLayout="YOUR_AD_LAYOUT" adFormat="auto" />
                    </CardContent>
                </Card>
            </Grid>


            {/* Chat Room and Additional Components */}
            <Grid item xs={12} md={4} style={{padding: '20px'}}>
                {/* TopikzXX Section */}
                <TopikzXX/>

                {/* Chat Room Section */}
                <Card style={cardStyle}> {/* Chat Room Section */}
                    <CardContent>
                        <Typography variant="h5" gutterBottom style={{ color: 'white' }}></Typography>
                        <ScrollableBox sx={{ height: '40vh' }}>
                            <MessageList />
                        </ScrollableBox>
                        <EmojiPicker setSelectedEmoji={setSelectedEmoji} />
                        <SendMessage selectedEmoji={selectedEmoji} />
                    </CardContent>
                </Card>

                {/* Recent Uploads, Most Viewed, and Most Liked Sections */}
                <Grid item xs={12} container spacing={2} style={{marginTop: '20px'}}>
                    <Grid item xs={12}>
                        <Card style={cardStyle}> {/* Chat Room Section */}
                            <CardContent style={{backgroundColor: '#424242', color: 'white'}}>
                                <Typography variant="h5" gutterBottom style={{color: 'white'}}></Typography>
                                <RecentUploads/>
                            </CardContent>

                        </Card>

                    </Grid>


                    <Grid item xs={12}>
                        <Card style={cardStyle}> {/* Chat Room Section */}
                            <CardContent style={{backgroundColor: '#424242', color: 'white'}}>
                                <Typography variant="h5" gutterBottom style={{color: 'white'}}></Typography>
                                <MostViewed/>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card style={cardStyle}> {/* Chat Room Section */}
                            <CardContent style={{backgroundColor: '#424242', color: 'white'}}>
                                <Typography variant="h5" gutterBottom style={{color: 'white'}}></Typography>
                                <MostLiked/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default ChatRoom;