const initialState = {
  movies: [],
  loading: false,
  movie: {}
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCH_MOVIE':
      return {...state, movies: action.payload};
    case 'SET_LOADING':
      return {...state, loading: action.payload};
    case 'GET_MOVIE_INFO':
      return {...state, movie: action.payload};
    case 'RESET_MOVIE_INFO':
      return {...state, movie: {}}
    default:
      return state;
  }
}

export default searchReducer;