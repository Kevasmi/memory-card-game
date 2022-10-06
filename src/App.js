import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import CardList from './components/CardList';

function App() {
  const [cards, setCards] = useState(cardData);

  function handleCardClick(e) {
    setCards(() => {
      const newCard = cards.map((card) => {
        if (card.id === e.currentTarget.id) {
          if (card.clicked === false) {
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
