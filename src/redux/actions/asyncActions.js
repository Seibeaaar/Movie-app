import { searchMovie, setLoading, getMovieInfo } from './searchActions';
import { getMovies, getMovie } from '../../api';

export const fetchMovies = query => {
  return async dispatch => {
    dispatch(setLoading(true));
    const data = await getMovies(query);
    dispatch(searchMovie(data));
    dispatch(setLoading(false));
  }
}

export const fetchMovieInfo = id => {
  return async dispatch => {
    dispatch(setLoading(true));
    const data = await getMovie(id);
    dispatch(getMovieInfo(data));
    dispatch(setLoading(false));
  }
}