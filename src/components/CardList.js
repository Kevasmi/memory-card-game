import { Grid } from '@mui/material';
import React, { useState } from 'react';
import MemoryCard from './MemoryCard';
import cardData from './utilities/cardData';

export default function CardList(props) {
  const [cards, setCards] = useState(cardData);
  const cardArray = cards.map((card) => (
    <Grid item key={card.id} xs={12} sm={6} md={4} lg={3} xl={2}>
      <MemoryCard
        id={card.id}
        card={card}
        onClick={() => {
          console.log(card.name + ' is clicked. ' + card.id);
        }}
      />
    </Grid>
  ));

  return <Grid container>{cardArray}</Grid>;
}
