import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MemoryCard(props) {
  return (
    <Card sx={{ maxWidth: 300, cursor: 'pointer' }}>
      <CardMedia
        component='img'
        image={require('../imgs/lukeskywalker.jpg')}
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
