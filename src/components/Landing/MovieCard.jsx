import React from 'react';
import NotFound from '../../assets/NotFound.png'
import { Link } from 'react-router-dom';

const MovieCard = ({ movieInfo: { Title, Year, Poster, imdbID } }) => {
  return ( 
    <div className="col-md-3 mb-5">
      <div className="card card-body bg-dark text-center h-100">
        <img className="w-100 mb-2" src={Poster === 'N/A' ? NotFound : Poster } alt="poster"/>
        <h5 className="text-light card-title">{Title} - {Year}</h5>
        <Link 
          to={`/movie/${imdbID}`} 
          className="btn btn-primary"
        >
          Movie details
          <i className="fas fa-chevron-right ml-3" />
        </Link>
      </div>
    </div>
  );
}
 
export default MovieCard;