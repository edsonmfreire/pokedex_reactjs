import React from 'react';
import './style.css';

const PokeItem = props => {
  const { poke } = props;

  return (
    <div className="PokeItem">
      <div className="name">
        {poke.name}
      </div>
    </div>
  )
};

export default PokeItem;