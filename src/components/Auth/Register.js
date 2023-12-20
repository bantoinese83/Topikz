// Register.js
import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Card, CardContent, CardActions, Typography, Grid, Link } from '@mui/material';
import {signUp} from "../../firebase/auth";
import { useNavigate } from 'react-router-dom';
import PasswordStrengthBar from 'react-password-strength-bar';

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: values => {
      const errors = {};
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords must match';
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await signUp(values.email, values.password);
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
            <Typography variant="h5" gutterBottom>Register</Typography>
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
              <PasswordStrengthBar password={formik.values.password} />
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                fullWidth
                margin="normal"
                error={formik.errors.confirmPassword ? true : false}
                helperText={formik.errors.confirmPassword}
              />
              <CardActions>
                <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
              </CardActions>
            </form>
            <Typography variant="body2">Already a member? <Link onClick={() => navigate('/login')}>Sign In</Link></Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Register;