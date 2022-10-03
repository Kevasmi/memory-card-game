import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MemoryCard(props) {
  return (
    <Card sx={{ width: 300, cursor: 'pointer' }}>
      <CardMedia
        component='img'
        sx={{ height: 400 }}
        image={require('../imgs/Luke Skywalker.jpg')}
        alt='Luke Skywalker'
      />
      <CardContent sx={{ maxHeight: 20 }}>
        <Typography variant='h6' color='text.secondary'>
          Luke Skywalker
        </Typography>
      </CardContent>
    </Card>
  );
}
