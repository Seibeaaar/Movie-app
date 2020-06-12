import { searchMovie, setLoading } from './searchActions';
import { getMovies } from '../../api';

export const fetchMovies = query => {
  return async dispatch => {
    dispatch(setLoading(true));
    const data = await getMovies(query);
    dispatch(searchMovie(data));
    dispatch(setLoading(false));
  }
}