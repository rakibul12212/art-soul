import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Google } from '@mui/icons-material';

import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const defaultTheme = createTheme();
const SignupPage = () => {

  const {
    handlePassword,
    handleEmail,
    userName,
    setUserName,
    handleResetPassword,
    signInWithGoogle,
    handleNameChange,
    toggleLogin,
    isLogin,
    setLoading,
    setError,
    setUser,
    setName,
    setPass,
    setEmail,
    email,
    pass,
    name,
    error,
    user,
    
  } = useAuth();
  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from?.pathname || "/";
  // Handle Google Sign in or sign up
  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
         history.push(redirect_url);
        saveUser(
          result.user.email,
          result.user.displayName,
          result.user.photoURL,
          "PUT"
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  // Sign Up with Email and Password
    const handleSubmit = (event,photoURL) => {
       
      event.preventDefault();
      
        const data = new FormData(event.currentTarget);
        
        
          setName(data.get('firstName') +' '+ data.get('lastName'))
          setEmail(data.get('email'))
          setPass(data.get('password'))
          console.log(name,email,pass)
          
            createUserWithEmailAndPassword(auth, email, pass)
              .then((userCredential) => {
                console.log(userCredential);
                setError("");
                // setUserName(userCredential);
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, photoURL, "POST");
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                  displayName: name,
                })
                history.push(redirect_url)
                  .then(() => {})
                  .catch((error) => {});
                // history.push(redirect_url);
              })
              .catch((err) => {
                const errorMessage = err.message;
                setError(errorMessage);
              });
              
      };
      const saveUser = (email, displayName, photoURL, method) => {
        const user = { email, displayName, photoURL };
        fetch("http://localhost:5000/users", {
          method: method,
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        });
      };
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                {
                  <ul>
                    <li>{error}</li>
                  </ul>
                }
                
              </Grid>
              <Grid item xs={12}>
                
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label={
                    <span>
                      I agree with all{' '}
                      <a className='text-blue-500 underline'
                        href="https://www.termsfeed.com/live/cf573e69-5d9c-4986-adf4-e27b5fac2fbd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms and Conditions
                      </a>{' '}
                      of ArtSoul
                    </span>
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link as={NavLink} to='/login' variant="body2" className='text-blue-500'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          
        </Box>
        
      </Container>
    </ThemeProvider>
        </>
    );
};

export default SignupPage;