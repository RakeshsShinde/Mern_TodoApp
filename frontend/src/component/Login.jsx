import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Loader from './Loader';
import Error from './Error';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/rakesh1321">
                Rakesh shinde
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const darktheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

const lightTheme = createTheme({
    palette: {
        mode: 'light'
    }
});

export default function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(false);
    const [show, setshow] = useState(false);
    const navigate = useNavigate();






    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const config = {
                header: {
                    'Content-type': "application/json"
                }
            }
            setloading(true);
            const { data } = await axios.post('/users/login', {
                email,
                password,
            }, config)


            const { other } = data;
            localStorage.setItem("userInfo", JSON.stringify(other));
            navigate('/')
            setloading(false);


        } catch (error) {
            seterror(error.response.data);
            setloading(false);
        }


    }

    console.log(error);
    const style = {
        color: show ? "blue" : "",
    }

    return (
        <ThemeProvider theme={lightTheme}>
            <Grid container mx='auto' component="main" sx={{ width: '70%', height: '50vh', marginTop: "50px", }}>
                <CssBaseline />
                <Grid

                    item
                    xs={false}
                    sm={false}
                    md={6}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
                    {error && <span style={{
                        marginTop: "50px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        




                    }}><Error severity="error" text={error} /></span>}
                    <Box
                        sx={{
                            my: 4,
                            mx: 4,
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
                        {loading && <Loader />}
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={show ? "text" : "password"}
                                id="password"
                                value={password}
                                autoComplete="current-password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <span style={{
                                                marginTop: '5px',
                                                cursor: 'pointer',
                                            }} onClick={() => setshow(!show)}>
                                                <VisibilityOutlinedIcon style={style} />
                                            </span>

                                        </InputAdornment>
                                    ),
                                }}

                                onChange={(e) => setpassword(e.target.value)}

                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                onClick={handlesubmit}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>

                                <Grid item>
                                    <span>not have account?</span>

                                    <Link to="/signup" variant="body2">
                                        {"Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}