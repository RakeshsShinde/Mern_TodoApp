import { Alert } from '@mui/material';
import React from 'react';

const Error = ({severity, text}) => {
    return (
        <Alert severity={severity} color="error" sx={{
            minWidth:"70%",
            color:'#65647C',
            fontSize:'16px',
            display:"flex",
            justifyContent:'center'

            

        }}>
            {text}
        </Alert>
    );
}

export default Error;
