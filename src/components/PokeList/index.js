import React from 'react';
import './style.css';

import PokeItem from '../PokeItem';

const PokeList = props => {
  return (
    <div className="PokeList">
      {props.pokemons.map((pokemon, index) => {
        return (<PokeItem key={index} poke={pokemon} />)
      })}
    </div>
  )
};

export default PokeList;