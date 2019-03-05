import React, { Component } from 'react';
import { PokemonCard } from './styles';

export class Pokemon extends Component {
  render() {
    return (
      <PokemonCard>
        <p>Poke 1 - <span>Lv 5</span></p>
        <p><span>50</span>/<span>20</span></p>
      </PokemonCard>
    )
  }
}

export default Pokemon;
