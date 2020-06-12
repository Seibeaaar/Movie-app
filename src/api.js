const API_KEY = '956118da';
const BASE_URL = 'http://www.omdbapi.com/';

export const getMovies = async query => {
  const response = await fetch(`${BASE_URL}?t=${query}&apikey=${API_KEY}`);
  return response.json();
}