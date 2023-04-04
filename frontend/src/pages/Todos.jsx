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
import Pagination from '@mui/material/Pagination'
const Wrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    Height: '70%',
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
    const [page, setPage] = useState(1);
    const [data, setdata] = useState([]);
    const itemsperpage = 6;
    const handleChange = (event, value) => {
        setPage(value);
    };

    function usePagination(data, itemsperpage) {
        const totalpages = Math.ceil(data.length / itemsperpage)
        const startindex = (page - 1) * itemsperpage;
        const endindex = startindex + itemsperpage;
        const filterdata = data.slice(startindex, endindex)
        return { totalpages, filterdata }
    }


    const { totalpages, filterdata } = usePagination(data, itemsperpage)
    console.log(totalpages, filterdata);


    useEffect(() => {
        try {
            dispatch(todo_list_start());
            axios.get(`/task`).then((res) => {
                dispatch(todo_list_success(res.data.tasks))
                setdata(res.data.tasks)
            })
        } catch (error) {
            dispatch(todo_list_fail(error.response.data))
        }
    }, [dispatch]);


    return (


        <Container maxWidth='xl' sx={{
            padding: '50px',
            backgroundColor: '#ffffff',

        }} >
            <CssBaseline />
            <Wrapper>

                <Typography variant='h6' sx={{
                    margin: '0px 100px',
                    fontFamily: '"Poppins", sans serif !important',
                    fontWeight: '500',
                    letterSpacing: '0.2rem',
                    fontSize: '30px'
                }} >
                    Welcome back , <span sx={{
                        color: '#4c4645',
                        fontFamily: '"Dancing Script", cursive !important',
                        letterSpacing: '0.3rem',
                        fontWeight: 200

                    }} >{username}</span>
                </Typography>

                <Stack direction={'row'} spacing={5} sx={{
                    alignItems: 'center',
                    justifyContent: 'center',

                }} >
                    <TextField placeholder='Search tasks ' size='small' sx={{
                        width: '300px'
                    }}></TextField>
                    <Button variant='contained' color='success' endIcon={<BsCalendarPlus />} onClick={handleOpen}>create</Button>
                    <CreateTaskmodal open={open} handleClose={handleClose} />
                </Stack>

                <Box sx={{
                    flexGrow: 1,
                    padding: '30px 20px',
                    minHeight: '70vh',

                }} >
                    {error && <span style={{
                        marginTop: "50px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',


                    }}><Error severity="error" text={error} /></span>}
                    {loading && <TodoLoader />}
                    {filterdata.length > 0 ? <Grid container rowSpacing={5} columnSpacing={3} >
                        {filterdata?.map((task, i) => (
                            <Grid item xs={12} md={4} lg={4} key={`${i}-${task.id}`} >

                                <SingleTodo task={task} />
                            </Grid>
                        ))}
                    </Grid> : <Typography variant='h3' sx={{
                        textAlign: 'center',
                        margin: '100px auto',
                        color: '#4a4e69'
                    }}>No more todos..</Typography>}
                </Box>
            </Wrapper>
            <Pagination style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',

                padding: 10
            }} count={10} page={page} onChange={handleChange} />
        </Container>

    );
}

export default Todos;
