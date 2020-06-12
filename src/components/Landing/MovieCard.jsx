import React from 'react';

const MovieCard = ({ movieInfo: { Title, Year, Type, Poster, imdbID }}) => {
  return ( 
    <div className="col-md-3 mb-5">
      <div className="card card-body bg-dark text-center h-100">
        <img className="w-100 mb-2" src={Poster} alt="poster"/>
        <h5 className="text-light card-title">{Title} - {Year}</h5>
        <a href="" className="btn btn-primary">
          Movie details
          <i className="fas fa-chevron-right ml-3" />
        </a>
      </div>
    </div>
  );
}
 
export default MovieCard;