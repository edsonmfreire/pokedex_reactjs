/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './style.css';

const PokeItem = props => {
  const [abl, setAbilites] = useState([]);
  const [forms, setForms] = useState([]);

  const { poke } = props;

  let pokeNumber = poke.url.split('pokemon/');
  pokeNumber = parseInt(pokeNumber[1].replace('/', ''));

  let number = pokeNumber;
  let pad = "000";
  pokeNumber = (pad + pokeNumber).slice(-pad.length);

  let img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeNumber}.png`;

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/${number}`;

    axios.get(url)
      .then(res => {
        const { abilities, forms } = res.data;
        setAbilites(abilities);
        setForms(forms);
      })
  }, [number]);

  return (
    <div className="PokeItem">
      <img src={img} alt="" />
      <div className="infos">
        <div className="pokeNumber">#{pokeNumber}</div>
        <div className="pokeName">{poke.name}</div>
      </div>

      <div className="otherInfo">
        <div className="info">
          <span>Abilities</span>
          {abl.map((abilitie, index) => {
            return <div className="infoItem" key={index}><a href="#">{abilitie.ability.name}</a></div>
          })}
        </div>

        <div className="info">
          <span>Formas</span>
          {forms.map((form, index) => {
            return <div className="infoItem" key={index}><a href="#">{form.name}</a></div>
          })}
        </div>
      </div>
    </div>
  )
};

export default PokeItem;