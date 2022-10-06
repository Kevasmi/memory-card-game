import { Grid } from '@mui/material';
import React from 'react';
import MemoryCard from './MemoryCard';

export default function CardList(props) {
  const cards = props.cardData;
  const cardArray = cards.map((card) => (
    <Grid item key={card.id} xs={12} sm={6} md={4} lg={3} xl={2}>
      <MemoryCard id={card.id} card={card} onClick={props.onClick} />
    </Grid>
  ));

  return <Grid container>{cardArray}</Grid>;
}
