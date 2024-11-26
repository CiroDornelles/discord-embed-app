import React from 'react';
import { TextField, Box } from '@mui/material';

function PersonalInfoCard(){

    return(
        <Box component="form" sx={{ '& .MuiTextField-root': { mb: 2 } }}>
            <TextField
                fullWidth
                label="Nome"
                variant="outlined"
                placeholder="Nome do personagem"
            />
            <TextField
                fullWidth
                label="Jogador"
                variant="outlined"
                placeholder="Nome do Jogador"
            />
            <TextField
                fullWidth
                label="Cronica"
                variant="outlined"
                placeholder="Nome da Cronica"
            />
        </Box>
    );
}

export default PersonalInfoCard;