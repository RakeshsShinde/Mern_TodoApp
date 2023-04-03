import { Box, Button, Container, CssBaseline, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled, } from '@mui/material/styles'
import '../index.css'
import { BsCalendarPlus } from 'react-icons/bs'
import SingleTodo from '../component/SingleTodo';
import { useDispatch, useSelector } from 'react-redux'
import { todoActions } from '../store/store'
import axios from 'axios'
import TodoLoader from '../component/TodoLoader';
import Error from '../component/Error';
import CreateTaskmodal from '../component/CreateTaskmodal';


const Wrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    height: '100vh',
    padding: '60px',


}));



const Todos = () => {
    const dispatch = useDispatch();

    const { todo_list_start, todo_list_success, todo_list_fail } = todoActions
    const usersTodos = useSelector((state) => state.userTodos)
    const { loading, todos, error } = usersTodos;
    const username = useSelector((state) => state.userLogin.userInfo.Firstname)
    const [open, setOpen] = React.useState(false);
    const [typeFilter, settypeFilter] = useState('shopping');
    const [dayFilter, setdayFilter] = useState('last 7 days')
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)


    useEffect(() => {
        try {
            dispatch(todo_list_start());
            axios.get(`/task`).then((res) => {
                dispatch(todo_list_success(res.data.tasks))
            })
        } catch (error) {
            dispatch(todo_list_fail(error.response.data))
        }
    }, [dispatch]);


    return (


        <Container maxWidth='xl' sx={{
            padding: '50px',
            backgroundColor: '#edf2f4',

        }} >
            <CssBaseline />
            <Wrapper>

                <Typography variant='h6' sx={{
                    margin: '0px 100px',
                    fontFamily: '"Poppins", sans serif !important',
                    fontWeight: '500',
                    letterSpacing: '0.2rem'
                }} >
                    Welcome back <span style={{
                        color: '#4c4645',
                        fontWeight: '500',
                        letterSpacing: '0.3rem'
                    }} >{username}</span>
                </Typography>

                <Stack direction={'row'} spacing={5} sx={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >
                    <TextField placeholder='Search tasks ' size='small' sx={{

                        width: '300px'
                    }}></TextField>
                    <Button variant='outlined' endIcon={<BsCalendarPlus />} onClick={handleOpen}>create</Button>
                    <CreateTaskmodal open={open} handleClose={handleClose} />
                </Stack>

                <Box sx={{ flexGrow: 1, padding: '30px 60px' }} >
                    {error && <span style={{
                        marginTop: "50px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}><Error severity="error" text={error} /></span>}
                    {loading && <TodoLoader />}
                    <Grid container rowSpacing={5} columnSpacing={3} >
                        {todos?.map((task, i) => (
                            <Grid item xs={12} md={4} lg={4} key={`${i}-${task.id}`} >

                                <SingleTodo task={task} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Wrapper>
        </Container>

    );
}

export default Todos;
