import {styled} from '@mui/material/styles';
import { Box, Checkbox, createTheme, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { AiFillCarryOut, AiOutlineCarryOut, AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),

    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    maxHeight: '300px'

}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const SingleTodo = () => {
    return (
        <Item>
            <Stack direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }} sx={{

                    height: '40px',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <Typography variant='subtitle1' sx={{
                    width: '120px',
                    backgroundColor: '#ECF2FF',
                    color: '#62CDFF',
                    textAlign: 'center',
                    fontSize: '17px',
                    borderRadius: '5px'

                }} >
                    management
                </Typography>

                <Checkbox sx={{
                    marginLeft: 'auto',
                }} {...label} icon={<AiOutlineCarryOut size={25} />} checkedIcon={<AiFillCarryOut size={25} />} />

            </Stack>

            <Typography variant='subtitle2'>
                meeting at @9am about resource management
            </Typography>

            <Box component='div' sx={{

                width: '100%',

                padding: '2px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',


            }}>
                <Typography variant='subtitle2' sx={{
                    fontSize: '13px',
                    color: '#6B728E'
                }}>
                    28 may 2023 ,9:45 AM
                </Typography>

                <Stack direction='row' spacing={1}>
                    <Link >
                        <BiEdit color='#2b9348' size={25} />
                    </Link>
                    <Link to='/'>
                        <AiOutlineDelete color='#FF597B' size={25} />
                    </Link>


                </Stack>

            </Box>

        </Item>
    );
}

export default SingleTodo;
