import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovieInfo } from '../redux/actions/asyncActions';
import { resetMovieInfo } from '../redux/actions/searchActions';
import NotFound from '../assets/NotFound.png';
import Spinner from './Spinner';

const Movie = ({ movie: {Title, Poster, Year, Released, Genre, Actors, Plot, Type, imdbID, imdbRating}, 
  loading, fetchMovieInfo, resetMovieInfo }
  ) => {
  useEffect(() => {
    const currentURL = window.location.href;
    fetchMovieInfo(currentURL.slice(currentURL.lastIndexOf('/') + 1));
  }, [])
  window.addEventListener('popstate', () => {
    resetMovieInfo();
  })
  return ( 
    <>
      {loading ? <Spinner /> : 
      <div className="container">
        <Link to='/' onClick={resetMovieInfo}>
          <i className="fas fa-chevron-left mr-2" />
          Go back to search
        </Link>
      <div className="row mt-4 mb-5">
        <div className="col-md-4 card card-body">
          <img src={Poster === 'N/A' ? NotFound : Poster } alt="Poster" />
        </div>
        <div className="col-md-8">
          <h2 className="mb-8">

          </h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Title: </strong>
              {Title}
            </li>
            <li className="list-group-item">
              <strong>Year: </strong>
              { Year }
            </li>
            <li className="list-group-item">
              <strong>Released: </strong>
              { Released }
            </li>
            <li className="list-group-item">
              <strong>Genre: </strong>
              { Genre }
            </li>
            <li className="list-group-item">
              <strong>Plot: </strong>
              { Plot }
            </li>
            <li className="list-group-item">
              <strong>Actors: </strong>
              { Actors }
            </li>
            <li className="list-group-item">
              <strong>Type: </strong>
              { Type }
            </li>
            <li className="list-group-item">
              <strong>IMDB Rating: </strong>
              { imdbRating }
            </li>
          </ul>
        </div>
      </div>
      </div>
    }
    </>
  );
}

const mapStateToProps = state => {
  return {
    movie: state.movies.movie,
    loading: state.movies.loading
  }
}
 
export default connect(mapStateToProps, { fetchMovieInfo, resetMovieInfo })(Movie);