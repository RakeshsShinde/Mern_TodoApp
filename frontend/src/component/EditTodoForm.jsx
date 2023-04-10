import { Box, Button, Container, CssBaseline, FormControl, InputLabel, MenuItem, OutlinedInput, Select, styled, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { editTodos } from '../Actions/EditTodosActions';

const EditTodoForm = () => {
    const dispatch = useDispatch();
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [category, setcategory] = useState('');
    const [status, setstatus] = useState('');
    const { id } = useParams();

    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '450px',
        marginTop: '50px'

    }


    const divStyle = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '50px',
        marginTop: '50px',
        justifyContent: 'space-between'
    }

    const categories = ['travel', 'shopping', 'whishlist', 'work', 'personal']

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!title || !description || !category) return;
        await dispatch(editTodos(id, title, description, category, status))
        window.location.replace('/dashboard');
    }

    useEffect(() => {
        const fetchSingleTodo = async () => {
            const { data } = await axios.get(`/task/${id}`);
            settitle(data.title);
            setdescription(data.description);
            setcategory(data.type);
            setstatus(data.status);
        }

        fetchSingleTodo();
    }, [id])
    return (
        <div style={divStyle} >
            <Container maxWidth='xl'  >
                <CssBaseline />
                <Typography variant='h3' >Edit task</Typography>
                <Box sx={style}  >
                    <FormControl fullWidth>
                        <TextField label="Task title"
                            variant="outlined"

                            value={title}
                            onChange={(e) => settitle(e.target.value)}
                        />

                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            label='Description'
                            placeholder='type something about task ..'
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}

                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>category</InputLabel>
                        <Select
                            input={<OutlinedInput label="Name" />}
                            multiline
                            value={category}
                            label='category'
                            onChange={(e) => setcategory(e.target.value)}

                        >

                            {categories.map((name) => (
                                <MenuItem key={name} value={name}>{name}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                    <FormControl >
                        <InputLabel >status</InputLabel>
                        <Select
                            input={<OutlinedInput label="Name" />}
                            multiline
                            value={status}
                            onChange={(e) => setstatus(e.target.value)}
                        >
                            <MenuItem value={'pending'}>pending</MenuItem>
                            <MenuItem value={'complete'}>complete</MenuItem>

                        </Select>
                    </FormControl>

                </Box>
                <Button variant="contained" color="primary" sx={{
                    marginTop: '20px'
                }} onClick={handleUpdate}>Edit</Button>
            </Container>
        </div>


    );
}

export default EditTodoForm;
