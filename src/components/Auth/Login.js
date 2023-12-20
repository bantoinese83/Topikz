// Login.js
import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Card, CardContent, CardActions, Typography, Grid, Link } from '@mui/material';
import {signIn} from "../../firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        await signIn(values.email, values.password);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>Login</Typography>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
              />
              <CardActions>
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
              </CardActions>
            </form>
            <Typography variant="body2">Not a member? <Link onClick={() => navigate('/register')}>Sign Up</Link></Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;