import axios from 'axios';

const GET_POKEMON_LIST_PATH = 'https://pokeapi.co';

export const getPokemonList = () => (
  axios.get(GET_POKEMON_LIST_PATH)
);
