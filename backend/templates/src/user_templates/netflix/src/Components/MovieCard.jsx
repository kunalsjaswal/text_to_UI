import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

const MovieCard = ({ title, year, image, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <Card onClick={handleFlip} style={{ backgroundColor: '#1c1c1c', color: '#FFFFFF', borderRadius: '10px' }}>
      <CardActionArea>
        {flipped ? (
          <CardContent>
            <Typography variant="h5" style={{ color: '#FF0000' }}>
              {title}
            </Typography>
            <Typography variant="body2" style={{ color: '#FFFFFF' }}>
              {description}
            </Typography>
          </CardContent>
        ) : (
          <>
            <CardMedia
              component="img"
              alt={title}
              height="300"
              image={image}
              style={{ borderRadius: '10px 10px 0 0' }}
            />
            <CardContent>
              <Typography variant="h5" style={{ color: '#FF0000' }}>
                {title}
              </Typography>
              <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                {year}
              </Typography>
            </CardContent>
          </>
        )}
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
