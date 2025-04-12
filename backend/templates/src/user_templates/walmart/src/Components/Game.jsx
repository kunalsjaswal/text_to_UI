import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';

const Game = () => {
  const [ballPosition, setBallPosition] = useState({ top: '50%', left: '50%' });

  const handleHover = () => {
    const newTop = Math.random() * 80 + 10 + '%';
    const newLeft = Math.random() * 80 + 10 + '%';
    setBallPosition({ top: newTop, left: newLeft });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Circle Game
      </Typography>
      <Typography variant="body1" paragraph>
        The Circle Game is a fun and engaging game where players must avoid touching the edges of a circle while navigating through various obstacles. The goal is to stay within the circle for as long as possible and achieve the highest score.
      </Typography>
      <Box
        id="game-box"
        sx={{
          width: 1000,
          height: 500,
          border: '4px solid red',
          position: 'relative',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <Box
          id="ball"
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            borderRadius: '50%',
            position: 'absolute',
            top: ballPosition.top,
            left: ballPosition.left,
            transform: 'translate(-50%, -50%)',
            transition: 'top 0.3s, left 0.3s',
          }}
          onMouseEnter={handleHover}
        />
      </Box>
    </Container>
  );
};

export default Game;
