import React from 'react';
import './style.css';

import PokeList from '../PokeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Pokedex
        </p>
        <PokeList />
      </header>
    </div>
  );
}

export default App;
