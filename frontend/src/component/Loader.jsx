import { Box, LinearProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
    return (
        <Box sx={{ width: '100%' }} mt={3}>
            <LinearProgress />
        </Box>
    );
}

export default Loader;
