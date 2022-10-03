import './App.css';
import React from 'react';
import Header from './components/Header';
import MemoryCard from './components/MemoryCard';
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <div>
      <Header></Header>
      <main className='gameboard'>
        <MemoryCard></MemoryCard>
      </main>
    </div>
  );
}

export default App;
