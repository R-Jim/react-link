import axios from 'axios';

const GET_POKEMON_LIST_PATH = 'https://pokeapi.co';
const GET_COUNTRY_LIST_PATH = 'https://restcountries.eu/rest/v2/all';

export const getPokemonList = () => (
  axios.get(GET_POKEMON_LIST_PATH)
);

export const getCountryList = () => (
  axios.get(GET_COUNTRY_LIST_PATH)
);
