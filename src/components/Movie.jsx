import React from 'react';
import { connect } from 'react-redux';

const Movie = ({ movie }) => {
  return ( 
    <div className="row">
      <div className="col-md-4 card card-body">
        <img src={movie.Poster} alt="Poster"/>
      </div>
      <div className="col-md-8">
        <h2 className="mb-8">

        </h2>
        <ul className="list-group">
          { Object.keys(movie).map(item => item === 'Response' || item === 'Ratings' || item === 'Poster' ? null : <li
            className="list-group-item"
          >
            <strong>{item}: </strong>
            {movie[item]}
          </li>
          )}
        </ul>
      </div>
    </div> 
  );
}

const mapStateToProps = state => {
  return {
    movie: state.movies.movie
  }
}
 
export default connect(mapStateToProps, null)(Movie);