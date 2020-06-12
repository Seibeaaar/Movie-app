import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovieInfo } from '../../redux/actions/asyncActions';

const MovieCard = ({ movieInfo: { Title, Year, Poster, imdbID }, fetchMovieInfo }) => {
  return ( 
    <div className="col-md-3 mb-5">
      <div className="card card-body bg-dark text-center h-100">
        <img className="w-100 mb-2" src={Poster} alt="poster"/>
        <h5 className="text-light card-title">{Title} - {Year}</h5>
        <Link 
          to={`/movie/${imdbID}`} 
          className="btn btn-primary"
          onClick={() => fetchMovieInfo(imdbID)}
        >
          Movie details
          <i className="fas fa-chevron-right ml-3" />
        </Link>
      </div>
    </div>
  );
}
 
export default connect(null, { fetchMovieInfo })(MovieCard);