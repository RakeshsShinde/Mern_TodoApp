import { styled } from '@mui/material/styles';
import { Box, Checkbox, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AiFillCarryOut, AiOutlineCarryOut, AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../Actions/deleteTodoActions'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f6f8fa',
    ...theme.typography.body2,
    padding: theme.spacing(3),

    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '280px',


}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const SingleTodo = ({ task }) => {
    const dispatch = useDispatch();

    const handleDeleteTodo = (id) => {
        console.log(id);
        dispatch(removeTodo(id))
        window.location.replace('/dashboard');
    }

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
                    {task.type}
                </Typography>

                <Checkbox sx={{
                    marginLeft: 'auto',
                }} {...label} icon={task.status === "complete" ? <AiFillCarryOut size={25} color={'#023e8a'} /> : <AiOutlineCarryOut size={25} />} />

            </Stack>

            <Typography variant='subtitle2' sx={{
                marginLeft: '12px',
                color: '#546478',
                fontWeight: 400,
                fontSize: '16px',
                fontFamily: '"Roboto", sans serif !important'
            }}>
                {task.title}
            </Typography>
            <Typography variant='body1'
                marginLeft='10px'>
                {task.description}
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
                    color: '#1b263b',
                    fontFamily: '"Nunito", sans serif !important',
                    fontWeight: 300,
                }}>
                    {`${task.date.split('T')[0]}${"  "}${task.time}`}
                </Typography>

                <Stack direction='row' spacing={1}>
                    <Link to={`/task/${task._id}`}>
                        <BiEdit color='#2b9348' size={25} />
                    </Link>
                    <Link>
                        <AiOutlineDelete color='#FF597B' size={25} onClick={() => handleDeleteTodo(task._id)} />
                    </Link>
                </Stack>
            </Box>

        </Item>
    );
}

export default SingleTodo;
