import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './Landing/SearchForm';
import Spinner from './Spinner';
import MoviesContainer from './Landing/MoviesContainer';

const Landing = ({ loading }) => {
  return ( 
    <div className="container">
      <SearchForm />
      { loading ? <Spinner /> : <MoviesContainer />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.movies.loading
  }
}
 
export default connect(mapStateToProps, null)(Landing);