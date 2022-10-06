import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import cardData from './components/utilities/cardData';

function App() {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(cardData);

  function handleCardClick(e) {
    setCards(() => {
      const newCard = cards.map((card) => {
        if (card.id === e.currentTarget.id) {
          if (card.clicked === false) {
            setScore((prevState) => prevState + 1);
            return { ...card, clicked: true };
          } else {
            console.log('Game Over');
          }
        }
        return card;
      });
      return [...newCard];
    });
  }

  return (
    <div>
      <Header></Header>
      <main className='gameboard'>
        <CardList onClick={handleCardClick} cardData={cards} />
      </main>
    </div>
  );
}

export default App;
