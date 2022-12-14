import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MemoryCard(props) {
  return (
    <Card
      sx={{ width: 300, marginBottom: 3, cursor: 'pointer' }}
      id={props.id}
      onClick={props.onClick}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          sx={{ height: 375 }}
          image={props.card.src}
          alt={props.card.name}
        />
        <CardContent sx={{ height: 15 }}>
          <Typography variant='h6' color='text.secondary'>
            {props.card.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
