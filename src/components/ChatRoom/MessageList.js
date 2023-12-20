// MessageList.js
import React, {useEffect, useState} from 'react';
import {collection, onSnapshot} from 'firebase/firestore';
import {List, ListItem, ListItemText, Avatar, Box, Typography} from '@mui/material';
import {db} from '../../firebase/firestore';
import './styles/MessageList.css';
import moment from 'moment';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    return onSnapshot(collection(db, "messages"), (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(newMessages);
    });
  }, []);

  return (
    <List sx={{ maxHeight: '70vh', overflow: 'auto' }} className="message-list">
      {messages.map((message) => (
        <ListItem key={message.id} alignItems="flex-start" className="message-item">
          <Avatar alt="User avatar" className="message-avatar" />
          <Box className="message-box">
            <Typography variant="subtitle2" className="message-username">{message.username}</Typography>
            <ListItemText primary={message.text} className="message-text" />
            <Typography variant="caption" className="message-timestamp">
              {message.timestamp?.toDate ? moment(message.timestamp.toDate()).fromNow() : 'Timestamp not available'}
            </Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default MessageList;