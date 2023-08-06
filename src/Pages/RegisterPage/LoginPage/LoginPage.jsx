
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import useAuth from '../../hooks/useAuth';
import './LoginPage.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Google } from '@mui/icons-material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom';

const LoginPage = () => {
  const defaultTheme = createTheme();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const {
    handlePassword,
    handleEmail,
    handleResetPassword,
    signInWithGoogle,
    handleNameChange,
    toggleLogin,
    isLogin,
    setError,
    setUser,
    error,
    user,
    name,
  } = useAuth();
  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  // Handle Google Sign in or sign up
  console.log(redirect_url);
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);  
          setEmail(data.get('email'))
          setPass(data.get('password'))
          signInWithEmailAndPassword(auth, email, pass)
          .then((result) => {
            setError("");
            // navigate(from,{replace:true})
            history.push(redirect_url);
          })
          .catch((error) => {
            const errorMessage = error.message;
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {
              <ul>
                <li>{error}</li>
              </ul>
            }
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleGoogleSignUp}
            >
              <Google />
            </Button>

            <Grid container>
            {isLogin && (
              <Grid item xs>
              
                <Link as={NavLink} to='/resetPass' onClick={handleResetPassword} variant="body2" className='text-blue-500'>
                  Forgot password?
                </Link>
                
              </Grid>
              )}
              <Grid item>
             
                <Link as={NavLink} to='/signup' variant="body2"className='text-blue-500'>
                  {"Don't have an account? Sign Up"}
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

export default LoginPage;