import { Backdrop, Box, Button, Fade, FormControl, InputLabel, MenuItem, Modal, OutlinedInput, Select, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import dayjs from 'dayjs'
import { useDispatch} from 'react-redux'
import { createtodo } from '../Actions/todoActions'
const CreateTaskmodal = ({ open, handleClose }) => {
    const [category, setcategory] = useState('');
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [taskDate, setTaskDate] = useState(dayjs().format('YYYY-MM-DD'));
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const time = `${hours}:${minutes}`

    const [taskTime, setTaskTime] = useState(time);
    const [status, setstatus] = useState('pending');
    const dispatch = useDispatch();



    const resetField = () => {
        settitle('');
        setcategory('');
        setdescription('');
        setstatus('pending');
    }

    const createTodo = (e) => {
        e.preventDefault();
        if (!title || !description || !category) return;
        dispatch(createtodo(title, description, category, taskDate, taskTime, status))
        resetField();
        window.location.replace('/dashboard');
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        backgroundColor: '#f7f7f8',
        border: '1px solid gray',
        borderRadius: '5px',
        boxShadow: 12,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',

    };
    const TextFieldstyle = {
        width: '70%',
        margin: '5px auto',

    }

    const categories = ['travel', 'shopping', 'whishlist', 'work', 'personal']


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <img src='https://mui.com/static/sponsors/doit-light.svg' height={100} width={100} alt='logo' />
                        <FormControl fullWidth>
                            <TextField label="Task title"
                                variant="outlined"
                                sx={TextFieldstyle}
                                value={title}
                                onChange={(e) => settitle(e.target.value)}
                            />

                        </FormControl>
                        <FormControl fullWidth>
                            <TextField sx={TextFieldstyle}
                                label='Description'
                                placeholder='type something about task ..'
                                multiline
                                rows={4}
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}

                            />
                        </FormControl>
                        <FormControl sx={TextFieldstyle}>
                            <InputLabel >Category</InputLabel>
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
                        <FormControl fullWidth>
                            <TextField sx={TextFieldstyle}
                                disabled
                                label="Task Date"
                                defaultValue={taskDate}

                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField sx={TextFieldstyle}
                                disabled
                                label="Task Time"
                                defaultValue={taskTime}
                            />
                        </FormControl>

                        <FormControl sx={TextFieldstyle} >
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
                        <Stack direction={'row'} gap={'1rem'} sx={{ width: '50%', margin: '5px' }} justifyContent={'center'}>
                            <Button variant="contained" color="success" onClick={createTodo}>Create</Button>
                            <Button variant="outlined" onClick={resetField}>Reset</Button>

                        </Stack>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default CreateTaskmodal;
