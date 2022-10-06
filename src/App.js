import './App.css';
import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';

function App() {
  return (
    <div>
      <Header></Header>
      <main className='gameboard'>
        <CardList />
      </main>
    </div>
  );
}

export default App;
