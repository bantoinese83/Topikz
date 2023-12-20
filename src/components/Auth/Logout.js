// Logout.js
import React from 'react';
import { Button } from '@mui/material';
import { logOut } from '../../firebase/auth';

const Logout = () => (
  <Button onClick={logOut}>Logout</Button>
);

export default Logout;