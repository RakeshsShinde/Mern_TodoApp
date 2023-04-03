import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Actions/usersActions';


export default function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };



    const closemenu = () => {
        setAnchorEl(null);
    }
    const LogoutHandle = () => {
        navigate('/')
        dispatch(logout())

        setAnchorEl(null);
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            sx={{
                width: '250px',
                position: 'absolute',
                top: '30px'

            }}
            open={isMenuOpen}
            onClose={closemenu}
        >
            <MenuItem onClick={closemenu}>Profile</MenuItem>
            <MenuItem onClick={LogoutHandle}>Logout</MenuItem>
        </Menu>
    );


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar component='nav' sx={{
                paddingX: '100px',
                backgroundColor: '#ffffff',
                color: 'black'
            }}>
                <Toolbar>

                    <Link to='/dashboard' style={{
                        textDecoration: 'none'
                    }} >
                        <Typography
                            variant="h5"
                            noWrap
                            component="h6"
                            sx={{
                                display: { xs: 'none', sm: 'block' }, marginLeft: '50px',
                                fontWeight: 700,
                                fontFamily: '"Dancing Script", cursive !important',
                                fontSize: '55px',
                                color: '#f72585',

                            }}
                        >
                            doit
                        </Typography>
                    </Link>

                    {/* <Box sx={{
                        marginLeft: '150px'
                    }}>
                        <Search  >
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box> */}
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Avatar alt="Travis Howard" src={userInfo.profilepic} />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"

                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
                <Divider variant="middle" />
            </AppBar>

            {renderMenu}
        </Box >
    );
}