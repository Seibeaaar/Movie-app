import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../redux/actions/asyncActions';

const SearchForm = ({ fetchMovies }) => {
  const [query, setQuery] = useState('');
  const sendRequest = e => {
    e.preventDefault();
    query.trim() && fetchMovies(query);
    setQuery('');
  }
  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" />
          Search for movies and TV series
        </h1>
        <form 
          action="" 
          id="searchForm"
          onSubmit={sendRequest}
        >
          <input 
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Put a name of a movie or series here..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary btn-bg mt-3"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default connect(null, { fetchMovies })(SearchForm);