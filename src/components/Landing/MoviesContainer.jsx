import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

const MoviesContainer = ({ movies }) => {
  return (
    <div className="row">
      { movies ? movies.map(movie => <MovieCard key={movie.imdbID} movieInfo={movie} /> ) : <h2 className="m-auto">No results found</h2> }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  }
}

export default connect(mapStateToProps, null)(MoviesContainer)
