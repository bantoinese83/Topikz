import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { getFirestore, collection, query, orderBy, limit } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import app from "../../firebase/firebaseInit";

const MostViewed = () => {
    const db = getFirestore(app);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const q = query(collection(db, "videos"), orderBy("viewCount", "desc"), limit(5));
            const querySnapshot = await getDocs(q);
            const videoData = [];
            querySnapshot.forEach((doc) => {
                videoData.push({ id: doc.id, ...doc.data() });
            });
            setVideos(videoData);
        };

        fetchVideos();
    }, [db]);

    return (
        <Box>
            <Typography variant="h6">Most Viewed Videos</Typography>
            {videos.map((video) => (
                <Card key={video.id} sx={{ display: 'flex', mb: 1 }}>
                    <CardActionArea component="a" href={`/video/${video.id}`}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={video.thumbnailUrl}
                            alt={video.title}
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="subtitle1">
                                {video.title}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                {video.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
};

export default MostViewed;
