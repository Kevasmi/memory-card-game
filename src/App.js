import './App.css';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Header from './components/Header';
import TransitionsModal from './components/TransitionsModal';
import CardList from './components/CardList';
import cardData from './components/utilities/cardData';

function App() {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(cardData);
  const [open, setOpen] = useState(false);
  const [victory, setVictory] = useState(false);

  function handleCardClick(e) {
    setCards(() => {
      const newCard = cards.map((card) => {
        if (score === 11) {
          setScore(12);
          setVictory(true);
          handleOpen();
        }
        if (card.id === e.currentTarget.id) {
          if (card.clicked === false) {
            setScore((prevState) => prevState + 1);
            return { ...card, clicked: true };
          } else {
            handleOpen();
          }
        }
        return card;
      });
      return [...newCard];
    });
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  async function handleReset() {
    handleClose();
    await timeoutResolver(100);
    setScore(0);
    setCards(cardData);
    setVictory(false);
  }

  function timeoutResolver(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(true);
      }, ms);
    });
  }

  return (
    <div>
      <Header></Header>
      <TransitionsModal
        victory={victory}
        open={open}
        handleReset={handleReset}
      ></TransitionsModal>
      <main className='gameboard'>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 'bold',
          }}
        >
          Score: {score}
        </Typography>
        <CardList onClick={handleCardClick} cardData={cards} />
      </main>
    </div>
  );
}

export default App;
