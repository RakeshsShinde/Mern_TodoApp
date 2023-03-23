import { Box, Container, CssBaseline, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { styled, } from '@mui/material/styles'
import { } from '@mui/material/colors'
import '../index.css'
import { AiOutlinePlus } from 'react-icons/ai'
import SingleTodo from '../component/SingleTodo';



const Wrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    height: '100vh',
    padding: '60px',
    backgroundColor: '#f7fff7'

}));












const Todos = () => {

    return (


        <Container maxWidth='xl' sx={{
            padding: '50px',

        }} >
            <CssBaseline />
            <Wrapper>

                <Typography variant='h6' sx={{
                    margin: '0px 100px'
                }} >
                    welcome back ,<span>Rakesh</span>
                </Typography>

                <Stack direction={'row'} spacing={5} sx={{
                    alignItems: 'center',

                    justifyContent: 'center'
                }} >
                    <TextField placeholder='Search tasks ' size='small' sx={{
                        width: '300px'
                    }}></TextField>
                    <AiOutlinePlus size={30} />
                </Stack>



                <Box sx={{ flexGrow: 1, padding: '30px 60px' }} >

                    <Grid container rowSpacing={5} columnSpacing={3} >
                        <Grid item xs={12} md={4} lg={4} >

                      <SingleTodo/>
                        </Grid>

                    </Grid>
                </Box>
            </Wrapper>
        </Container>




    );
}

export default Todos;
