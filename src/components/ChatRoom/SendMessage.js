// SendMessage.js
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { addMessage } from "../../firebase/firestore";
import { Button, TextField, Box } from "@mui/material";
import './styles/SendMessage.css';

const SendMessage = ({ selectedEmoji }) => {
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await addMessage({ text: values.message });
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    if (selectedEmoji) {
      formik.setFieldValue('message', formik.values.message + selectedEmoji.native);
    }
  }, [formik, selectedEmoji]);

  return (
      <Box component="form" onSubmit={formik.handleSubmit} className="sendMessage-form">
        <TextField
            id="message"
            name="message"
            label="Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            fullWidth
            InputProps={{
              style: { color: 'white' } // Set text color to white
            }}
            InputLabelProps={{
              style: { color: 'white' } // Set label color to white
            }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ ml: 1, color: 'white' }}>Send</Button>
      </Box>
  );
};

export default SendMessage;
