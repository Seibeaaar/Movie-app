const API_KEY = '956118da';
const BASE_URL = 'http://www.omdbapi.com/';

export const getMovies = async query => {
  const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search;
}