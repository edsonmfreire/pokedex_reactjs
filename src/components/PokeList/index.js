import React from 'react';
import './style.css';

import PokeItem from '../PokeItem';

const pokemons = [
  {
    name: 'Bulbasaur',
  },
  {
    name: 'Ivysaur',
  },
  {
    name: 'Venusaur',
  },
  {
    name: 'Charmander',
  },
  {
    name: 'Charmeleon',
  },
  {
    name: 'Charizard',
  },
  {
    name: 'Bulbasaur',
  },
  {
    name: 'Ivysaur',
  },
  {
    name: 'Venusaur',
  },
  {
    name: 'Charmander',
  },
  {
    name: 'Charmeleon',
  },
  {
    name: 'Charizard',
  },
  {
    name: 'Bulbasaur',
  },
  {
    name: 'Ivysaur',
  },
  {
    name: 'Venusaur',
  },
  {
    name: 'Charmander',
  },
  {
    name: 'Charmeleon',
  },
  {
    name: 'Charizard',
  }
]

const PokeList = () => {
  return (
    <div className="PokeList">
      {pokemons.map(pokemon => {
        return (<PokeItem poke={pokemon} />)
      })}
    </div>
  )
};

export default PokeList;