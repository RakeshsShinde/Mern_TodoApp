import { Backdrop, Box, Fade, FormControl, InputLabel, MenuItem, Modal, OutlinedInput, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { DatePicker } from '@mui/lab'

const CreateTaskmodal = ({ open, handleClose }) => {
    const [category, setcategory] = useState('');

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
                            <TextField label="Task title" variant="outlined" sx={TextFieldstyle} />

                        </FormControl>
                        <FormControl fullWidth>
                            <TextField sx={TextFieldstyle}
                                label='Description'
                                placeholder='type something about task ..'
                                multiline
                                rows={4}

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
                        <FormControl>
                            <DatePicker
                                label='Date picker'

                            />
                        </FormControl>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default CreateTaskmodal;
