const initialState = {
  movies: [],
  loading: false,
  movie: []
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCH_MOVIE':
      return {...state, movies: action.payload};
    case 'SET_LOADING':
      return {...state, loading: action.payload};
    default:
      return state;
  }
}

export default searchReducer;