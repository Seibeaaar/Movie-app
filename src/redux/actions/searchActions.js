export const searchMovie = data => {
  return {
    type: 'SEARCH_MOVIE',
    payload: data
  }
}

export const setLoading = status => {
  return {
    type: 'SET_LOADING',
    payload: status
  }
}

export const getMovieInfo = data => {
  return {
    type: 'GET_MOVIE_INFO',
    payload: data
  }
}