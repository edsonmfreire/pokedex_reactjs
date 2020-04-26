/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PokeList from '../PokeList';

import './style.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [max, setMax] = useState(54);
  const limit = 20;

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    if (offset <= max) setOffset(offset + limit); // Don't try to load more if reach limit of itens.
  }

  function fetch(offset) {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    axios.get(url)
      .then(res => {
        const response = res.data.results;
        setMax(res.data.count);

        let atualPokemons = pokemons;

        let newObject = [...atualPokemons, ...response];
        setPokemons(newObject);
      })
  }

  useEffect(() => {
    fetch(offset);
  }, [offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Pokedex
        </p>
        <PokeList pokemons={pokemons} />
      </header>
    </div>
  );
}

export default App;
