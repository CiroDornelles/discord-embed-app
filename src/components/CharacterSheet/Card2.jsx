import React from 'react';
import { TextField, Box } from '@mui/material';

function NatureCard(){

    return(
        <Box component="form" sx={{ '& .MuiTextField-root': { mb: 2 } }}>
            <TextField
                fullWidth
                label="Natureza"
                variant="outlined"
                placeholder="Sua natureza verdadeira"
            />
            <TextField
                fullWidth
                label="Comportamento"
                variant="outlined"
                placeholder="Sua máscara social"
            />
            <TextField
                fullWidth
                label="Clã"
                variant="outlined"
                placeholder="Seu clã vampírico"
            />
        </Box>
    );
}

export default NatureCard;