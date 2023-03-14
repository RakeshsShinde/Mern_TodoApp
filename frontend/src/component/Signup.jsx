import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Error from './Error';
import Loader from './Loader';
import axios from 'axios';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
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

export default function Signup() {
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirm, setconfirm] = useState('');
    const [file, setfile] = useState('');

    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
    const [loading, setloading] = useState(false);

    const [Showpass, setShowpass] = useState(false);
    const [conpass, setconpass] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password != confirm) {
            setmessage("password do not match  ")
        } else {
            setmessage(null);
            try {
                const config = {
                    header: {
                        "Content-type": "application/json",
                    }
                }

                setloading(true)
                const { data } = await axios.post('/users/register', {
                    Firstname,
                    Lastname,
                    email,
                    password,



                }, config)

                setloading(false);
                localStorage.setItem('userInfo', JSON.stringify(data));
                setmessage('successfully create..')
            } catch (error) {
                seterror();
                setloading(false);
            }
        }




    };



    const passstyle = {
        color: Showpass ? "#3E54AC" : "gray",
    }

    const conpassStyle = {
        color: conpass ? "#3E54AC" : "gray",
    }

    return (
        <ThemeProvider theme={lightTheme}>
            <Grid container mx='auto' component="main" sx={{ width: '70%', height: '30vh', marginTop: "20px", }}>
                <CssBaseline />

                <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square
                >

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
                        {error && <span style={{
                            marginTop: "5px",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: 'center',
                            alignItems: 'center'




                        }}><Error severity="error" text={error} /></span>}
                        {message && <span style={{
                            marginTop: "5px",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: 'center',
                            alignItems: 'center'




                        }}><Error severity="success" text={message} /></span>}
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <Box sx={{
                                display: "flex",
                                width: "100%",
                                gap: "0.5rem"
                            }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Firstname"
                                    label="Firstname"
                                    name="Firstname"
                                    type="text"
                                    autoFocus
                                    value={Firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Lastname"
                                    label="Lastname"
                                    name="Lastname"
                                    type="text"

                                    autoFocus
                                    value={Lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                            </Box>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                label="Email"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}

                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={Showpass ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <span style={{
                                                marginTop: '5px',

                                                cursor: 'pointer',
                                            }} onClick={() => setShowpass(!Showpass)}>
                                                <VisibilityOutlinedIcon style={passstyle} />
                                            </span>

                                        </InputAdornment>
                                    ),
                                }}

                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirm"
                                label="Confirm password"
                                type={conpass ? "text" : "password"}
                                id="confirm"
                                value={confirm}
                                onChange={(e) => setconfirm(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <span style={{
                                                marginTop: '5px',

                                                cursor: 'pointer',
                                            }} onClick={() => setconpass(!conpass)}>
                                                <VisibilityOutlinedIcon style={conpassStyle} />
                                            </span>

                                        </InputAdornment>
                                    ),
                                }}

                            />



                            <TextField
                                margin='normal'
                                disabled
                                fullWidth
                                id="outlined-disabled"

                                value={file ? `${file.name}` : "select profile pic"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {file ? <>
                                                <Button onClick={() => setfile(null)}>
                                                    <ClearIcon />
                                                </Button>
                                            </> : <><input
                                                accept="image/*"
                                                name="file"
                                                style={{ display: 'none' }}
                                                id="raised-button-file"
                                                multiple
                                                type="file"
                                                onChange={(e) => setfile(e.target.files[0])}
                                            />

                                                <label htmlFor="raised-button-file">
                                                    <Button variant='outlined' component="span" >
                                                        <CloudUploadOutlinedIcon />
                                                    </Button>
                                                </label></>}

                                        </InputAdornment>
                                    ),
                                }}
                            />




                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign in
                            </Button>
                            <Grid container>

                                <Grid item ml="auto">
                                    <span>Already have an account ?</span>

                                    <Link to="/login" variant="body2">
                                        {"Log in"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 2 }} />
                        </Box>
                    </Box>
                </Grid>
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
            </Grid>
        </ThemeProvider>
    );
}