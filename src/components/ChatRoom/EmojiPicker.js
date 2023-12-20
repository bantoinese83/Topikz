import React, { useState, useEffect, useRef } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { IconButton, Box } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const EmojiPicker = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [recentEmojis, setRecentEmojis] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pickerRef]);

  const onEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    setRecentEmojis([emoji, ...recentEmojis]);
    setShowPicker(false);
  };

  return (
      <Box className="emoji-picker-container">
        <IconButton
            onClick={() => setShowPicker(!showPicker)}
            style={{ color: 'white' }} // Correct style attribute
        >
          <InsertEmoticonIcon />
        </IconButton>
        {showPicker ? (
            <div ref={pickerRef}>
              <Picker data={data} onSelect={onEmojiSelect} />
            </div>
        ) : (
            <Box display="flex" overflow="auto">
              {recentEmojis.map((emoji, index) => (
                  <IconButton key={index} onClick={() => setSelectedEmoji(emoji)}>
                    {emoji.native}
                  </IconButton>
              ))}
            </Box>
        )}
        {selectedEmoji && <p>Selected emoji: {selectedEmoji.native}</p>}
      </Box>
  );
};

export default EmojiPicker;
