import React, { useState, useCallback } from 'react';
import { Box, Button } from '@mui/material';
import D10Icon from './D10Icon';
import './DiceRoller.css';

const DiceRoller = () => {
  const [diceResults, setDiceResults] = useState([]);
  const [isRolling, setIsRolling] = useState(false);

  const handleRoll = useCallback(() => {
    if (isRolling) return;

    setIsRolling(true);
    const results = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
    setDiceResults(results);

    setTimeout(() => {
      setIsRolling(false);
      
      // Enviar para o Discord
      window.discord?.sendMessage({
        content: `🎲 Resultado da rolagem: ${results.join(', ')}\nSucessos: ${results.filter(r => r >= 6).length}`
      });
    }, 1000);
  }, [isRolling]);

  const getDiceClass = (result) => {
    if (isRolling) return 'dice rolling';
    if (result >= 6) return 'dice success';
    return 'dice failure';
  };

  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: 400,
      bgcolor: 'rgba(0, 0, 0, 0.9)',
      borderRadius: 2,
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      border: '1px solid rgba(139, 0, 0, 0.5)',
      boxShadow: '0 0 20px rgba(139, 0, 0, 0.3)'
    }}>
      <Box sx={{ 
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
        minHeight: 100,
        alignItems: 'center',
        p: 2,
        bgcolor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 1,
        border: '1px solid rgba(139, 0, 0, 0.3)'
      }}>
        {diceResults.map((result, index) => (
          <div
            key={index}
            className={getDiceClass(result)}
            style={{
              '--delay': `${index * 0.1}s`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isRolling ? (
              <D10Icon color="#ffffff" size={32} />
            ) : (
              <span style={{ fontSize: '1.2rem' }}>{result}</span>
            )}
          </div>
        ))}
      </Box>

      <Button
        variant="contained"
        onClick={handleRoll}
        disabled={isRolling}
        sx={{
          bgcolor: 'rgba(139, 0, 0, 0.9)',
          '&:hover': {
            bgcolor: 'rgba(139, 0, 0, 1)',
            boxShadow: '0 0 15px rgba(255, 0, 0, 0.3)'
          },
          color: 'white',
          border: '1px solid rgba(255, 0, 0, 0.3)',
          boxShadow: '0 0 10px rgba(139, 0, 0, 0.3)',
          textTransform: 'none',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          py: 1,
          gap: 1,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <D10Icon color="#ffffff" size={24} />
        {isRolling ? 'Rolando...' : 'Rolar D10'}
      </Button>

      {diceResults.length > 0 && !isRolling && (
        <Box sx={{ 
          textAlign: 'center',
          color: 'white',
          p: 1,
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 1,
          border: '1px solid rgba(139, 0, 0, 0.3)',
          fontSize: '0.9rem'
        }}>
          <div>Resultados: {diceResults.join(', ')}</div>
          <div style={{ 
            color: diceResults.filter(r => r >= 6).length > 0 ? '#ffd700' : '#ff0000',
            fontWeight: 'bold',
            marginTop: '4px'
          }}>
            Sucessos (6+): {diceResults.filter(r => r >= 6).length}
          </div>
        </Box>
      )}
    </Box>
  );
};

export default DiceRoller;
