import React from 'react';
import { AppBar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar
      position='static'
      sx={{
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant='h3' color='inherit' component='div'>
        Star Wars Memory Card Game
      </Typography>
    </AppBar>
  );
}
